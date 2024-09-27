var reaadline = require('readline-sync');

// 10. Tabla de Multiplicar

var numeromulti = reaadline.question("Cual es tu numero?:");

for (let i = 1; i <= 10; i++) {
    console.log(numeromulti + " x " + i + " = " + numeromulti * i);
}

console.log("--------------------------");