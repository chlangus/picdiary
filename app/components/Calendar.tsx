import { useEffect, useState } from "react";
const DAY = ["S", "M", "T", "W", "T", "F", "S"];

export default function Calendar() {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateList, setDateList] = useState(getCalendar(currentDate));

  useEffect(() => {
    setDateList(getCalendar(currentDate));
  }, [currentDate]);
  return (
    <>
      <span
        className="flex justify-center text-3xl text-gray-700 mb-2 cursor-pointer"
        onClick={() => setCurrentDate(new Date())}
      >
        {currentDate.getFullYear()}
      </span>
      <section className="flex justify-around text-gray-500 my-4 text-5xl">
        <button onClick={() => prevMonth(currentDate, setCurrentDate)}>
          {"<"}
        </button>
        {currentDate.getMonth() + 1}
        <button onClick={() => nextMonth(currentDate, setCurrentDate)}>
          {">"}
        </button>
      </section>

      <div className="grid grid-cols-7 grid-flow-dense text-center gap-2 mx-60">
        {DAY.map((day) => (
          <span className=" text-xl mb-[-6px]">{day}</span>
        ))}
        {dateList.map((date, index) =>
          !date ? (
            <span key={index} className="border-t border-t-slate-400"></span>
          ) : (
            <span
              key={index}
              className={`
              pb-12
              border-t border-t-slate-400
              hover:bg-gray-700
              hover:text-white
              text-xl
              text-left
              ${!(index % 7) && "text-red-700"}
              ${(index % 7 === 6) && "text-blue-700"}
              ${
                today.getDate() === date &&
                today.getMonth() === currentDate.getMonth() &&
                today.getFullYear() === currentDate.getFullYear()
                  ? "text-green-700"
                  : ""
              }
              `}
            >
              {date}
            </span>
          )
        )}
      </div>
    </>
  );
}

function prevMonth(currentDate, setCurrentDate) {
  setCurrentDate(
    new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
  );
  return;
}

function nextMonth(currentDate, setCurrentDate) {
  setCurrentDate(
    new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
  );
  return;
}

function getCalendar(currentDate) {
  let lastDate = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  let firstDay = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  let dateList = [];
  let dateCnt = 1;
  for (let i = 0; i < lastDate + firstDay; i++) {
    if (firstDay > i) {
      dateList.push(0);
    } else {
      dateList.push(dateCnt++);
    }
  }
  // 첫날에서부터 마지막날 배열에 집어넣기 day 이전이면 넣지 않기

  return dateList;
}
