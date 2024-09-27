var reaadline = require('readline-sync');

//17. Numero Primo

var numeroprime = reaadline.question("Cual es tu numero?:");

for (let i = 2; i < numeroprime; i++) {
    if (numeroprime % i == 0) {
        console.log("Tu numero no es primo");
        break;
    } else if (i == numeroprime - 1) {
        console.log("Tu numero es primo");
    }
}

console.log("--------------------------");