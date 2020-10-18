
//'small' refers the number of bags which can contain 1 kg 
// 'big' refers the number of bags which can contain 5kgs of chocolate
// 'total' refers to the total kgs of chocolate.

function isThereEnoughChocolateBags(small, big, total){
    const maxBigBoxes = total / 5;
    const bigBoxesWeCanUse = maxBigBoxes < big ? maxBigBoxes : big;
    total -= bigBoxesWeCanUse * 5;

    if(small < total)return false;
    else return true;
}

module.exports = isThereEnoughChocolateBags;