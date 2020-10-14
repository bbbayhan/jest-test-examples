let rules = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
};

function romanNumberConverter(number){
    let converted = 0;
    let convertedNumber = number.split('');
    convertedNumber.forEach((char, index) => {
        let current = rules[char];
        let next = convertedNumber[index+1]? rules[convertedNumber[index+1]]: 0 ;

        if(current >= next)
            converted += current;
        else
            converted -= current;

    });
    return converted;
}
module.exports = romanNumberConverter;