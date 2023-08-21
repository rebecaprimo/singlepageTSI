//exercício Race Day
let raceNumber = Math.floor(Math.random() * 1000);
let isEarlyRegistered = true; // Variável que indica se o corredor se registrou cedo ou não.
let runnerAge = 20; // Idade do corredor. Altere esse valor para testar diferentes idades.

if (runnerAge > 18 && isEarlyRegistered) {
  raceNumber += 1000;
}

if (runnerAge > 18) {
  if (isEarlyRegistered) {
    console.log(`Corredor com número de corrida ${raceNumber} correrá às 9h30.`);
  } else {
    console.log(`Corredor com número de corrida ${raceNumber} correrá às 11h00.`);
  }
} else if (runnerAge < 18) {
  console.log(`Corredor jovem com número de corrida ${raceNumber} correrá às 12h30.`);
} else {
  console.log("Por favor, consulte a mesa de registro.");
}
