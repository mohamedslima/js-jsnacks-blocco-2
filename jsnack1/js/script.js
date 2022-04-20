// 1. Il software deve chiedere per 5 volte all'utente 
// di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.

// let sum = 0;

// for (let index = 0; index < 5; index++) {
//     const userNumber = parseInt(prompt("dimmi un numero"));
//     sum += userNumber;
// }

// console.log(sum);

let counter = 0;
let sum = 0;

while (counter < 5) {
    const userNumber = parseInt(prompt("dimmi un numero"))
    sum += userNumber;

    counter++;
}

console.log(sum);