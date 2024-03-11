import { useEffect, useState } from "react";
const DAY = ["일", "월", "화", "수", "목", "금", "토"];

// prevMonth 누르면 이전달로 설정

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateList, setDateList] = useState(getCalendar(currentDate));

  useEffect(() => {
    setDateList(getCalendar(currentDate));
  }, [currentDate]);
  return (
    <>
      <div className="text-center" onClick={() => setCurrentDate(new Date())}>
        {currentDate.getFullYear()}
      </div>
      <section className="flex justify-around">
        <button onClick={() => prevMonth(currentDate, setCurrentDate)}>
          {"<"}
        </button>
        {currentDate.getMonth() + 1}
        <button onClick={() => nextMonth(currentDate, setCurrentDate)}>
          {">"}
        </button>
      </section>

      <div className="grid grid-cols-7 text-center">
        {DAY.map((day) => (
          <span>{day}</span>
        ))}
        {dateList.map((date) => (!date ? <span></span> : <span>{date}</span>))}
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
  for (let i = 1; i < lastDate + firstDay; i++) {
    if (firstDay > i) {
      dateList.push(0);
    } else {
      dateList.push(dateCnt++);
    }
  }
  // 첫날에서부터 마지막날 배열에 집어넣기 day 이전이면 넣지 않기

  return dateList;
}
