var reaadline = require('readline-sync');

//13. Calculadora Basica

console.log("Calculadora Basica");

opcion=1;

while (opcion != 0) {

    var calculadora1 = reaadline.question("Ingresa el primer numero: ");
    var calculadora2 = reaadline.question("Ingresa el segundo numero: ");

    console.log("1. Sumar");
    console.log("2. Restar");
    console.log("3. Multiplicar");
    console.log("0. Salir");

    opcion = reaadline.question("Ingresa una opcion: ");

    switch (opcion) {
        case "1":
            console.log("La suma es: " + (parseInt(calculadora1) + parseInt(calculadora2)));
            break;
        case "2":
            console.log("La resta es: " + (parseInt(calculadora1) - parseInt(calculadora2)));
            break;
        case "3":
            console.log("La multiplicacion es: " + (parseInt(calculadora1) * parseInt(calculadora2)));
            break;
        case "0":
            break;
        default:
            console.log("Opcion Invalida");
            break;
    }
}

console.log("Gracias por utilizar, by: juancaaa11");

console.log("--------------------------");