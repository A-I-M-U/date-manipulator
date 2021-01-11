import { dateM } from './dateM.js';
import { timePassed } from './lib/utils/index.js';

const date_m = function () {
  return new dateM(...arguments);
};

date_m.timePassed = timePassed;

export default date_m;
