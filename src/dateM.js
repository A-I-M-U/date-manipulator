import { current, unixTime } from "./lib/methods/index.js";
import { year, month, hour } from "./lib/methods/api/index.js";

export function dateM(args, opt) {
  this.hFormat = "object" === typeof opt ? opt.hFormat ?? "24" : "24";
  this.date = new Date(...args);
}

const { prototype } = dateM;

prototype.current = current;
prototype.unixTime = unixTime;
prototype.year = year;
prototype.month = month;
prototype.hour = hour;