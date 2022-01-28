const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const MONTH_CORRECTOR = 1;
const BREAK_POINT = 10;

const addLeadingZero = (month: number): string => {
  if (month < BREAK_POINT) {
    return `0${month}`;
  }
  return month.toString();
};

export const normalizeDate = (date: string): string => {
  const dateObj = new Date(date);
  const Y = dateObj.getFullYear();
  const M = dateObj.getMonth() + MONTH_CORRECTOR;
  const D = dateObj.getDate();
  const d = dateObj.getDay();
  const h = dateObj.getHours();
  const m = dateObj.getMinutes();
  return `${D}/${addLeadingZero(M)}/${Y} ${h}:${m}(${weekDays[d]})`;
};
