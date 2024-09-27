var reaadline = require('readline-sync');

//16. Encuentra el Numero Mayor

var numeromayor = reaadline.question("Cual es tu primer numero?:");
var numeromayor2 = reaadline.question("Cual es tu segundo numero?:");
var numeromayor3 = reaadline.question("Cual es tu tercer numero?:");

if (numeromayor > numeromayor2 && numeromayor > numeromayor3) {
    console.log("Tu numero mayor es: ", numeromayor);
} else if (numeromayor2 > numeromayor && numeromayor2 > numeromayor3) {
    console.log("Tu numero mayor es: ", numeromayor2);
} else {
    console.log("Tu numero mayor es: ", numeromayor3);
}

console.log("--------------------------");