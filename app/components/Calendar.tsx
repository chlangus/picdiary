import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getCalendar from "../../libs/utils/getCalendar";
import nextMonth from "../../libs/utils/getNextMonth";
import prevMonth from "../../libs/utils/getPrevMonth";
const DAY = ["S", "M", "T", "W", "T", "F", "S"];

export default function Calendar() {
  const router = useRouter();
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date());
  const [dateList, setDateList] = useState(getCalendar(currentDate));

  useEffect(() => {
    setDateList(getCalendar(currentDate));
  }, [currentDate]);
  return (
    <main className="max-w-[960px] mx-auto">
      <section className="flex items-center justify-between mx-4 my-4 text-gray-700">
        <span
          className="flex justify-center text-3xl cursor-pointer "
          onClick={() => setCurrentDate(new Date())}
        >
          {currentDate.getFullYear()}
        </span>
        <span className="text-4xl">{currentDate.getMonth() + 1}</span>
        <div className="flex gap-4 text-2xl outline-none">
          <button onClick={() => prevMonth(currentDate, setCurrentDate)}>
            {"<"}
          </button>
          <button onClick={() => nextMonth(currentDate, setCurrentDate)}>
            {">"}
          </button>
        </div>
      </section>

      <div className="grid grid-cols-7 gap-2 text-center grid-flow-dense">
        {DAY.map((day, index) => (
          <span key={index} className=" text-xl mb-[-6px]">
            {day}
          </span>
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
              ${index % 7 === 6 && "text-blue-700"}
              ${
                today.getDate() === date &&
                today.getMonth() === currentDate.getMonth() &&
                today.getFullYear() === currentDate.getFullYear()
                  ? "text-green-700"
                  : ""
              }
              `}
              onClick={() => router.push(`/calendar/${date}`)}
            >
              {date}
            </span>
          )
        )}
      </div>
    </main>
  );
}
