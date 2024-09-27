var reaadline = require('readline-sync');

//20. Gestion de Tareas (Clases y Arrays)

class Tarea{

    constructor(nombre, completada){
        this.nombre = nombre;
        this.completada = completada;
    }



}

opciontareas=1;
var tareasarrays = [];

while (opciontareas != 0) {

    console.log("1. Crear Tarea");
    console.log("2. Completar");
    console.log("3. Mostrar Tareas Pendientes o Completadas");
    console.log("0. Salir");

    opciontareas = reaadline.question("Ingresa una opcion: ");

    switch (opciontareas) {

        case "1":

            var nombretarea = reaadline.question("Cual es tu nombre?:");
            var realizado = reaadline.question(" Pendiente o Completada?:");
            tareasarrays.push(new Tarea(nombretarea,realizado));
            break;


        case "2":


            for (let i = 0; i < tareasarrays.length; i++) {
                
                if (tareasarrays[i].completada == "Pendiente") {
                     console.log(tareasarrays[i].nombre, tareasarrays[i].completada);
                     break;
                }else{
                    console.log ("Todas las tareas han sido completadas");
                }
                

            }

            break;
        case "3":

            for (let i = 0; i < tareasarrays.length; i++) {
                console.log(tareasarrays[i].nombre, tareasarrays[i].completada);
            }
            break;
        case "0":
            break;
        default:    
            console.log("Opcion Invalida");
            break;
    }
}

console.log("--------------------------");