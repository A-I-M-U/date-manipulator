import { matchDate, getTime } from '../utils/index.js';

export function current(arg) {
  arg.trim();
  arg = arg.toLowerCase();
  let date;

  if (/:/.test(arg) && /(dd)|(mm)|(yyyy)/.test(arg)) {
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
  });
  arg = date + (getTime(arg, this.hFormat, this.date) ?? '');

  return arg;
}
