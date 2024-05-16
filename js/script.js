// PALINDTROMO

const userWord = prompt("Scegli una parola");

function getReversedWord(word){
    let reversedWord = "";
    for (i = word.length - 1; i >= 0; i--){
        reversedWord += word[i];
    }
    return reversedWord;
}

if(userWord.toUpperCase() === getReversedWord(userWord).toUpperCase()){
    console.log(`WOW! ${userWord} e ${getReversedWord(userWord)} sono uguali! è un palindtromo`);
} else {
    console.log(`${userWord} e ${getReversedWord(userWord)} sono differenti. Perciò niente palindromi oggi`);
}



// PARI E DISPARI

let userChoice;

do {
    userChoice = prompt("Scegli: pari o dispari?");
}
while(userChoice !== "pari" && userChoice !== "dispari");

console.log(userChoice)