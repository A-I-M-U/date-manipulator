import { matchDate, getTime, data } from '../utils/index.js';

export function current(arg) {
  arg.trim();
  arg = arg.toLowerCase();
  let date;

  if (/:/.test(arg) && /(dd)|(mm)|(yyyy)/.test(arg)) {
    if (!/\s/.test(arg)) return getTime(arg, this.hFormat, this.date) ?? arg;
    date = arg.slice(0, arg.lastIndexOf(' '));
    arg = arg.slice(arg.lastIndexOf(' '), arg.length);
  } else {
    date = arg;
    arg = null;
  }

  date = date.replace(matchDate, (m) => {
    if (m == 'dd') {
      return this.date.getDate();
    }
    if (m == 'mm') {
      return this.date.getMonth() + 1;
    }
    if (m == 'yyyy') {
      return this.date.getFullYear();
    }
    if (m == 'day') {
      return data.days[this.date.getDay()];
    }
    if (m == 'month') {
      return data.months[this.date.getMonth()];
    }
  });
  arg = date + (getTime(arg, this.hFormat, this.date) ?? '');

  return arg;
}
