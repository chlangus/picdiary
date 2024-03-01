import { useRef, useState } from "react";
import styles from "./Calendar.module.scss";
const DAY = ["일", "월", "화", "수", "목", "금", "토"];

export default function Calendar() {
  const mon = useRef(0);
  const today = new Date();
  const [date, setDate] = useState({
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    date: today.getDate(),
  });
  let firstDate = new Date(today.getFullYear(), today.getMonth(), 1);
  const lastDate = new Date(
    today.getFullYear(),
    today.getMonth() + mon.current + 1,
    0
  );

  const calMon = (value: number) => {
    mon.current += value;
    firstDate = new Date(
      today.getFullYear(),
      today.getMonth() + mon.current,
      1
    );
    setDate((prev) => ({
      ...prev,
      year: firstDate.getFullYear(),
      month: firstDate.getMonth() + 1,
    }));
  };

  const getDates = () => {
    let cnt = 0;
    let dateCnt = 1;
    let dates = [];
    for (let j = 1; j < lastDate.getDate() + cnt + 1; j++) {
      if (firstDate.getDay() >= j) {
        dates.push(0);
        cnt++;
      } else dates.push(dateCnt++);
    }

    return dates;
  };

  return (
    <>
      <h2 className="text-center">{date.year}년</h2>
      <h2 className="flex justify-around">
        <button onClick={() => calMon(-1)}>{"<"}</button>
        <span>{date.month}월</span>
        <button onClick={() => calMon(+1)}>{">"}</button>
      </h2>
      <h3 className="flex justify-around">
        {DAY.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </h3>
      <section className={styles.calendar}>
        {getDates().map((date, index) => {
          if (date)
            if (date === today.getDate())
              return <span key={index} className={`${styles.today} ${styles.date}`}>{date}</span>;
            else return <span key={index} className={styles.date}>{date}</span>;
          else return <span key={index} className={styles.date}> </span>;
        })}
      </section>
    </>
  );
}
