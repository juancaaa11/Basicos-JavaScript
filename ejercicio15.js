var reaadline = require('readline-sync');

//15. Invertir una cadena

var invertir = reaadline.question("Cual es tu frase?:");

console.log(invertir.split("").reverse().join(""));

console.log("--------------------------");