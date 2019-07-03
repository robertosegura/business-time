const addBusinessTime = require('./BusinessTime');

const holiday = {
  start: new Date('2019-12-24T21:00:00'),
  end: new Date('2019-12-25T21:00:00')
};

test('addBusinessTime function is defined', () => {
  expect(typeof addBusinessTime).toEqual('function');
});

test('addBusinessTime should return 2019-12-01T00:00:00', () => {
  expect(addBusinessTime(holiday, new Date('2019-12-01T00:00:00'), 60 * 60)).toEqual(new Date('2019-12-01T01:00:00'));
});

test('addBusinessTime should return 2019-12-25T21:00:01', () => {
  expect(addBusinessTime(holiday, new Date('2019-12-24T21:00:00'), 1)).toEqual(new Date('2019-12-25T21:00:01'));
});

test('addBusinessTime should return 2019-12-25T21:30:00', () => {
  expect(addBusinessTime(holiday, new Date('2019-12-24T20:30:00'), 60 * 60)).toEqual(new Date('2019-12-25T21:30:00'));
});

test('addBusinessTime should return 2019-12-25T21:00:01', () => {
  expect(addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), 1)).toEqual(new Date('2019-12-25T21:00:01'));
});

test('addBusinessTime should return 2019-12-24T20:59:59', () => {
  expect(addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), -1)).toEqual(new Date('2019-12-24T20:59:59'));
});

/*
addBusinessTime(holiday, new Date('2019-12-01T00:00:00'), 60 * 60) // returns 2019-12-01T01:00:00
addBusinessTime(holiday, new Date('2019-12-24T21:00:00'), 1) // returns 2019-12-25T21:00:01
addBusinessTime(holiday, new Date('2019-12-24T20:30:00'), 60 * 60) // returns 2019-12-25T21:30:00
addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), 1) // returns 2019-12-25T21:00:01
addBusinessTime(holiday, new Date('2019-12-25T00:00:00'), -1) // returns 2019-12-24T20:59:59
*/