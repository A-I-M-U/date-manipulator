import { current, unixTime } from './lib/methods/index.js';

export function dateM() {
  let args = Array.from(arguments);
  let opt = args.pop();
  this.hFormat = 'object' === typeof opt ? opt.hFormat : '24';
  if ('object' === typeof opt && args.length > 1) {
    this.date = new Date(...args);
  } else if (args.length == 0) {
    this.date = new Date();
  } else {
    this.date = new Date(...args, opt);
  }
}

dateM.prototype.current = current;
dateM.prototype.unixTime = unixTime;
