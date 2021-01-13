export function timePassed(begin, end) {
  if('object' !== typeof begin || 'object' !== typeof end) return 0;
  if ('function' !== typeof begin.unixTime || 'function' !== typeof end.unixTime)
    return 0;
  return (end.unixTime() - begin.unixTime()) / 1000 / 60 / 60 / 24;
}
