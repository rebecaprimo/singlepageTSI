//exercício clima Kelvin

const kelvin = 293;
const celsius = kelvin - 273;
let fahrenheit = celsius * (9/5) + 32;
fahrenheit = Math.floor(fahrenheit);

console.log(`A temperatura é ${fahrenheit} graus Fahrenheit.`);

const newton = Math.floor(celsius * (33/100));

console.log(`A temperatura é ${newton} graus Newton.`);

