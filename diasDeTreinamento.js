const nome = "Rebeca";

function getEventoAleatorio() {
  const numeroAleatorio = Math.floor(Math.random() * 3);

  if (numeroAleatorio === 0) {
    return "Maratona";
  } else if (numeroAleatorio === 1) {
    return "Triathlon";
  } else {
    return "Pentathlon";
  }
}

function getDiasTreino(evento) {
  if (evento === "Maratona") {
    return 50;
  } else if (evento === "Triathlon") {
    return 100;
  } else {
    return 200;
  }
}

function logEvento(nome, evento) {
  console.log(`${nome} vai participar do evento: ${evento}`);
}

function logTempo(nome, dias) {
  console.log(`${nome} vai treinar por ${dias} dias`);
}

const eventoAleatorio = getEventoAleatorio();
const diasTreino = getDiasTreino(eventoAleatorio);

logEvento(nome, eventoAleatorio);
logTempo(nome, diasTreino);
