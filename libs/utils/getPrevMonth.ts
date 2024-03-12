export default function prevMonth(currentDate, setCurrentDate) {
  setCurrentDate(
    new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
  );
  return;
}
