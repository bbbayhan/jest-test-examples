const romanNumberConverter = require('./index');

describe('Roman Number Converter', () => {
    it('should convert single digit roman numbers', () => {
        expect(romanNumberConverter("I")).toBe(1);
    });
   
    it('should convert roman numbers with multiple same digits', () => {
        expect(romanNumberConverter("III")).toBe(3);
    });

    it('should convert roman numbers with different digits', () => {
        expect(romanNumberConverter("XVI")).toBe(16);
    });

    it('should convert roman numbers with subtractive notation', () => {
        expect(romanNumberConverter("IV")).toBe(4);
    });

    it('should convert roman numbers with digits and subtractive notation', () => {
        expect(romanNumberConverter("XIX")).toBe(19);
    });

  });
