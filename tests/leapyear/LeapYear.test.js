const isLeapYear = require('jest-test-examples/code/leapyear/LeapYear.js');

describe('Leap Year Tester', () => {
    it('should divide by 4, and not by 100 or 400 ', () => {
        expect(isLeapYear("2016")).toBeTruthy();
    });
   
    it('should divide by 4, 100 and 400', () => {
        expect(isLeapYear("2000")).toBeTruthy();
    });

    it('should not be divisible by 4, 100 but divisible by 400 ', () => {
        expect(isLeapYear("1500")).toBeFalsy();
    });

    it('should not be non-divisible by 4', () => {
        expect(isLeapYear("2017")).toBeFalsy();
    });

  });
