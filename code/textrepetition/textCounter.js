
let text = "Jest is a delightful JavaScript Testing Framework with a focus on simplicity. It works with projects using: Babel, TypeScript, Node, React, Angular, Vue and more!";

function normalize(word){
    return word.toLowerCase().replace(/[.|,|!,|:]/g,"");
}

function textCounter(text){
    let dict = {};
    let separatedWords = text.split(" ");
    for( let word of separatedWords){
        if(normalize(word) in dict){
            ++dict[normalize(word)];
        } else{
            dict[normalize(word)]=1;
        }
    }
    return dict;
}

textCounter(text);




module.exports = textCounter;