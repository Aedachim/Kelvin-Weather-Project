/* The weatherforcast in kelvin, celsius and fahrenheit */
const kelvin = 293;
/* The value of celsius when subtract from kelvin */
const celsius = kelvin - 273;
// The equation helps to calculate to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
/* We used the built- in object to round down the fahrenheit temperature */
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);


