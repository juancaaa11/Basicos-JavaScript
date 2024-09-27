var reaadline = require('readline-sync');

//14.  Contador de Palabras

var frase = reaadline.question("Cual es tu frase?:");

console.log("Tu frase tiene ", frase.split(" ").length, " palabras");

console.log("--------------------------");