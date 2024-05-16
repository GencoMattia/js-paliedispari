const userWord = prompt("Scegli una parola");

function getReversedWord(word){
    let reversedWord = "";
    for (i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];
    }
    return reversedWord
}

console.log(getReversedWord(userWord))