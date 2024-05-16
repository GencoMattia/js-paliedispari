const userWord = prompt("Scegli una parola");

function getReversedWord(word){
    let reversedWord = "";
    for (i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];
    }
    return reversedWord
}

if(userWord.toLocaleUpperCase === getReversedWord(userWord).toLocaleUpperCase){
    console.log(`WOW! ${userWord} e ${getReversedWord(userWord)} sono uguali! è un palindtromo`)
} else {
    console.log(`${userWord} e ${getReversedWord(userWord)} sono differenti. Perciò niente palindromi oggi`)
}