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

// Scelta giocatore pari o dispari
let userChoice = prompt("Scegli: pari o dispari?");

while(userChoice !== "pari" && userChoice !== "dispari"){
    userChoice = prompt("Scegli: pari o dispari?");
}

console.log(userChoice);

// Scelta numero giocatore
let userNumber = Number.parseInt(prompt("Scegli un numero compreso tra 1 e 5"));

while(userNumber < 1 || userNumber > 5 || Number.isNaN(userNumber)){
    userNumber = prompt("Scegli un numero compreso tra 1 e 5");
}

console.log(`Numero utente: ${userNumber}`)

// Scelta numero computer
let computerNumber = Number.parseInt(getRandomNumber(1, 5));

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(`Numero computer: ${computerNumber}`);

// Somma numeri e verifica se la somma è pari o dispari
const numbersSum = userNumber + computerNumber

function getEvenStatus(numberA){
    if(numberA % 2 === 0){
        return "pari"
    } else {
        return "dispari"
    }
}

let sumStatus = getEvenStatus(numbersSum)

console.log(numbersSum ,sumStatus)

// Dichiara il vincitore
if(userChoice === sumStatus){
    console.log(`Complimenti! La somma ${numbersSum} tra ${userNumber} e ${computerNumber} è ${sumStatus}`);
} else {
    console.log(`Mi spiace, vince l'IA. La somma ${numbersSum} tra ${userNumber} e ${computerNumber} è ${sumStatus}`);
}