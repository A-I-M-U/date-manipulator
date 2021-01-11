var dateM = require('..');
var assert = require('assert');

var d = new dateM(2020, 1, 10, {
  hFormat: '12',
});

function test(expected, actual) {
  assert.equal(expected, actual);
  console.log('\033[34m✓', expected);
}

test('10 1 2020 12:0 AM', d.current('dd mm yyyy hh:mm'), '10 1 2020 12:0 AM');
test('366', dateM.timePassed(new dateM(2020, 0, 1), new dateM(2021, 0, 1)));
