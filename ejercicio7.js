var reaadline = require('readline-sync');

//7. Determinar Par o Impar

var par = reaadline.question("Cual es tu numero?:");

if (par % 2 == 0) {
    console.log("Tu numero es par");
} else {
    console.log("Tu numero es impar");
}

console.log("--------------------------");