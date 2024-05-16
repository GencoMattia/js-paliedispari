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

// let userChoice;

// do {
//     userChoice = prompt("Scegli: pari o dispari?");
// }
// while(userChoice !== "pari" && userChoice !== "dispari");


let userChoice = prompt("Scegli: pari o dispari?");

while(userChoice !== "pari" && userChoice !== "dispari"){
    userChoice = prompt("Scegli: pari o dispari?");
}

console.log(userChoice);

let userNumber = prompt("Scegli un numero compreso tra 1 e 5");

while(userNumber < 1 || userNumber > 5 || Number.isNaN(userNumber)){
    userNumber = prompt("Scegli un numero compreso tra 1 e 5");
}
