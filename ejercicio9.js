var reaadline = require('readline-sync');

//9. Calcular Factorial

var numerofact = reaadline.question("Cual es tu numero?");

var i=1;
var factorial=1;

while (i <= numerofact) {
    console.log(numerofact);
    i++;
    factorial=factorial*i;
}

console.log("--------------------------");