export default function getCalendar(currentDate) {
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

  return dateList;
}
