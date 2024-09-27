var reaadline = require('readline-sync');

//18. Clase Basica de Circulo
 
class Circulo {

    constructor(radio){

        this.radio = radio;
    }

    area(){

        return Math.PI * Math.pow(this.radio, 2);
    }
}

var radio = reaadline.question("Cual es tu radio?:");
var circulo = new Circulo(radio);
console.log("El area del circulo es: ", circulo.area());

console.log("--------------------------");