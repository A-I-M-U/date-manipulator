export function timePassed(begin, end) {
  if ('function' !== typeof begin.getUTC || 'function' !== typeof end.getUTC)
    return null;
  return (end.getUTC() - begin.getUTC()) / 1000 / 60 / 60 / 24;
}
