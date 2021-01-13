var dateM = require('..');
var assert = require('assert');

function test(expected, actual) {
  assert.equal(expected, actual);
  console.log('\033[34m✓', actual);
}

// ./src/lib/utils/timePassed.js
test('366', dateM.timePassed(new dateM(2020, 0, 1), new dateM(2021, 0, 1)));
test('1', dateM.timePassed(new dateM(2021, 0, 1), new dateM(2021, 0, 2)));
test('365', dateM.timePassed(new dateM(2021, 0, 1), new dateM(2022, 0, 1)));
test('-1', dateM.timePassed(new dateM(2021, 0, 2), new dateM(2021, 0, 1)));
test(0, dateM.timePassed(null));
test(0, dateM.timePassed([], []));
test(0, dateM.timePassed({}, {}));

// ./src/lib/methods/curtent.js
var d = new dateM(1970, 0, 1, {
    hFormat: '12'
});
test("1-1-1970", d.current("dd-mm-yyyy"));
test("1 1 1970", d.current("dd mm yyyy"));
test("12:0:0 AM", d.current("hh:mm:ss"));

var d2 = new dateM(2010, 10, 12);
test("12 11 2010", d2.current("dd mm yyyy"));

var d3 = new dateM(2021, 4, 11, {
    hFormat: '12'
});
test("11/5/2021 12:0:0 AM", d3.current("dd/mm/yyyy hh:mm:ss")); 

// ./src/lib/methods/getUTC.js
test(new Date().getTime(), new dateM().unixTime());