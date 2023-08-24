// Lugares que eu visitei
const lugaresQueVisitei = ['Paris', 'Nova York', 'Tóquio', 'Roma'];

for (let i = 0; i < lugaresQueVisitei.length; i++) {
  console.log(`Lugar ${i + 1}: ${lugaresQueVisitei[i]}`);
}

const lugaresAmiguinho = ['Roma', 'Tóquio', 'Londres', 'Cairo'];
const lugaresEmComum = [];

for (let i = 0; i < lugaresQueVisitei.length; i++) {
  for (let j = 0; j < lugaresAmiguinho.length; j++) {
    if (lugaresQueVisitei[i] === lugaresAmiguinho[j]) {
      lugaresEmComum.push(lugaresQueVisitei[i]);
    }
  }
}

console.log('Lugares em comum:', lugaresEmComum);

// Array de amigos no Facebook
const amigosDoFace = ['João', 'Maria', 'Pedro', 'Ana'];
const amigosDoFaceDoKaian = ['Maria', 'Carlos', 'Ana'];
const amigosEmComum = [];

for (let i = 0; i < amigosDoFace.length; i++) {
  for (let j = 0; j < amigosDoFaceDoKaian.length; j++) {
    if (amigosDoFace[i] === amigosDoFaceDoKaian[j]) {
      amigosEmComum.push(amigosDoFace[i]);
    }
  }
}

console.log('Amigos em comum:', amigosEmComum);

// Número secreto
const numeroSecreto = 42;
let tentativas = 0;

for (let i = 0; i < 10; i++) {
  const palpiteAtual = parseInt(prompt('Faça seu palpite:'));
  tentativas++;

  if (palpiteAtual === numeroSecreto) {
    console.log(`Parabéns, você acertou em ${tentativas} tentativas!`);
    break;
  }

  if (tentativas === 5) {
    console.log('Tentativas esgotadas. O número secreto era:', numeroSecreto);
    break;
  }
}

console.log('O jogo terminou.');
