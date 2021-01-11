import { matchTime } from './regexMatch.js';

export function getTime(str, format, date) {
  if (!str) return undefined;

  format = format == '12' || format == '24' ? format : '24';
  let [hours, min, sec] = [
    date.getHours(),
    date.getMinutes(),
    date.getSeconds(),
  ];

  str = str.replace(matchTime, (m) => {
    if (m == 'hh') {
      if (format == '12' && (hours > 12 || hours === 0)) {
        return hours === 0 ? hours + 12 : hours - 12;
      } else {
        return hours;
      }
    }
    if (m == 'mm') {
      return min;
    }
    if (m == 'ss') {
      return sec;
    }
  });
  if (format == '12') {
    str = str + (hours > 12 ? ' PM' : ' AM');
  }
  return str;
}
