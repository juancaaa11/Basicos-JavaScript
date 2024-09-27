var reaadline = require('readline-sync');

//19. Sistemas de Notas

var nota = reaadline.question("Cual es tu nota?:");

while (nota > 10 || nota < 0) {
    ;console.log("Nota Invalida");
    nota = reaadline.question("Cual es tu nota?:");
}

if (nota >= 6) {
    console.log("Aprobado");
}else{

    console.log("Reprobado");
}

console.log("--------------------------");