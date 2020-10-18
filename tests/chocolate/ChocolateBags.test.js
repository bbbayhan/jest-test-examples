const isThereEnoughChocolateBags = require('jest-test-examples/code/chocolate/ChocolateBags.js');

describe('Chocolate Bags Counter', () => {
    it('should return true if there is enough big bars', () => {
        expect(isThereEnoughChocolateBags(0,1,5)).toBeTruthy();
    });
   
    it('should return true if there is enough big bars and small bars', () => {
        expect(isThereEnoughChocolateBags(5, 3, 17)).toBeTruthy();
    });

    it('should return true if there is enough small bars', () => {
        expect(isThereEnoughChocolateBags(5, 0, 5)).toBeTruthy();
    });

    it('should return false if total is bigger than big bars and small bars', () => {
        expect(isThereEnoughChocolateBags(1, 1, 10)).toBeFalsy();
    });

  });
