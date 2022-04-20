// 3. Generatore di "nomi cognomi" casuali: prendendo una lista di nomi e una
// lista di cognomi, Gatsby vuole generare una falsa lista di 3 invitati.

const guestNames = ["Luca", "Antonio", "Vincenzo", "Laura", "Giuseppe", "Nahuel"];
const guestLastNames = ["Rossi", "Bianchi", "Alpino", "Verdi", "Slima", "Messi"];

const falseGuests = [];

for(let i = 0; i < 3; i++) {
    const randomNameIndex = Math.floor(Math.random() * guestNames.length);
    console.log(randomNameIndex);
    const randomName = guestNames[randomNameIndex];
    console.log(randomName);

    const randomLastNameIndex = Math.floor(Math.random() * guestLastNames.length);
    const randomLastName = guestLastNames[randomLastNameIndex];
    console.log(randomLastName);

    const randomGuest = `${randomName} ${randomLastName}`;
    falseGuests.push(randomGuest);
}

console.log(falseGuests);

