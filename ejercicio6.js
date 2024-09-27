var reaadline = require('readline-sync');

//6. Condicional Simple: Mayor o Menor

var usuario = reaadline.question("Cual es tu numero?");

var salida = (usuario > 10) ? "Eres mayor de 10" : "Eres menor de 10";

console.log(salida);

console.log("--------------------------");