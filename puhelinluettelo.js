const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Lisätään taulukkoon eli puhelinluetteloon Aku Ankka, Hessu Hopo ja heidän puhelinnumeronsa
let persons = [
  { name: "Aku Ankka", phonenumber: 45012345 },
  { name: "Hessu Hopo", phonenumber: 44067890 },
];

// Funktio puhelinnumeron hakemiseen
function findPhoneNumber(phonebook, name) {
  const person = phonebook.find(
    (p) => p.name.toLowerCase() === name.toLowerCase()
  );
  return person ? person.phonenumber : "Numeroa ei löytynyt.";
}

// Henkilön lisääminen
function addPerson() {
  rl.question("Anna nimi: ", (name) => {
    rl.question("Anna puhelinnumero: ", (phonenumber) => {
      persons.push({ name, phonenumber });
      console.log(`${name} lisätty puhelinluetteloon.`);
      showMenu();
    });
  });
}

// Haku nimen perusteella
function searchPerson() {
  rl.question("Anna nimi, jonka numeroa etsit: ", (name) => {
    console.log(`Puhelinnumero: ${findPhoneNumber(persons, name)}`);
    showMenu();
  });
}

// Valikko
function showMenu() {
  console.log("\nPuhelinluettelo");
  console.log("1. Lisää henkilö");
  console.log("2. Hae numeroa");
  console.log("3. Poistu");
  rl.question("Valitse toiminto: ", (choice) => {
    if (choice === "1") {
      addPerson();
    } else if (choice === "2") {
      searchPerson();
    } else if (choice === "3") {
      console.log("Ohjelma suljetaan.");
      rl.close();
    } else {
      console.log("Virheellinen valinta, yritä uudelleen.");
      showMenu();
    }
  });
}

// Käynnistä ohjelma
showMenu();
