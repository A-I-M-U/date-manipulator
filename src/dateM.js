import { current, unixTime } from './lib/methods/index.js';

export function dateM(args, opt) {
  this.hFormat = 'object' === typeof opt ? opt.hFormat ?? '24' : '24';
  this.date = new Date(...args);
}

dateM.prototype.current = current;
dateM.prototype.unixTime = unixTime;
