var reaadline = require('readline-sync');

// 11. Contar Vocales en una cadena

var vocales = reaadline.question("Cual es tu cadena?:");
contador=0;

for (let i = 0; i < vocales.length; i++) {
    if (vocales[i] == "a" || vocales[i] == "A" || vocales[i] == "e" || vocales[i] == "E" || vocales[i] == "i" || vocales[i] == "I" || vocales[i] == "o" || vocales[i] == "O" || vocales[i] == "u" || vocales[i] == "U") {
        contador++;
    }
}

console.log("Tu cadena tiene ",contador," vocales");

console.log("--------------------------");