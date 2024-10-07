var readline = require('readline-sync');

// 22. Calcular edad

console.log("¿Cuál es tu fecha de nacimiento? (XX/XX/XXXX)");

let fecha = readline.question();
fecha = new Date(fecha.split('/').reverse().join('-')); // Convierte la fecha a un objeto Date
let edad = new Edad(fecha);

class Edad {
    constructor(fecha) {
        this.fecha = fecha;
    }

    CalcularEdad() {
        let fechaActual = new Date();
        let edadCalculada = fechaActual.getFullYear() - this.fecha.getFullYear();
        let mes = fechaActual.getMonth() - this.fecha.getMonth();

        // Ajustar si no ha cumplido años este año
        if (mes < 0 || (mes === 0 && fechaActual.getDate() < this.fecha.getDate())) {
            edadCalculada--;
        }

        return edadCalculada;
    }
}

console.log("Tu edad es:", edad.CalcularEdad());
