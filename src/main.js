import { dateM } from './dateM.js';
import { timePassed } from './lib/helper_functions/index.js';

const date_m = function () {
  let args = [...arguments];
  let options = args.pop();
  if ('object' === typeof options) {
    return new dateM(args, options);
  } else if ('number' === typeof options || 'string' === typeof options) {
    return new dateM([...args, options]);
  } else {
    return new dateM(args);
  }
};

date_m.timePassed = timePassed;

export default date_m;
