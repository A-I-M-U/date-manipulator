import { current, getUTC } from './lib/methods/index.js';

export function dateM() {
  let args = Array.from(arguments);
  let opt = args.pop();
  if ('number' === typeof args[1]) args[1] = args[1] - 1;
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
dateM.prototype.getUTC = getUTC;
