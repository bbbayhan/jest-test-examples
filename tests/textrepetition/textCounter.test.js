const textCounter = require('jest-test-examples/code/textrepetition/textCounter.js');

let text1 = "Jest is a delightful JavaScript Testing Jest is delightful is";
let text2 = "Jest, is a delightful, JavaScript! Testing!! Jest is delightful is."

let countedText1 = {
    jest: 2,
    is: 3,
    a: 1,
    delightful: 2,
    javascript: 1,
    testing: 1,
}

describe('Text Counter', () => {
    it('should return an object with the key as word and the value as number of repetition', () => {
        expect(textCounter(text1)).toStrictEqual(countedText1);
    });
   
    it('should return an object with the key as normalized word and the value as number of repetition', () => {
        expect(textCounter(text2)).toStrictEqual(countedText1);
    });

});

