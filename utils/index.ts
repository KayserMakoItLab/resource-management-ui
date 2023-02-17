export function generateDays(month: number, year: number) {
  if (!year) {
    const d = new Date();
    year = d.getFullYear();
  }
  var date = new Date(year, month, 1);
  var days: Date[] = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
}
