const userNum = parseInt(prompt("dimmi in un numero per calcolare il cubo"));

let counter = 1;
while ( counter <= userNum) {
    const thisCube = counter ** 3;
    console.log(thisCube);
    counter++;
}