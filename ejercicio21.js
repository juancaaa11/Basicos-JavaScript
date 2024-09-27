var reaadline = require('readline-sync');

//21. Generador de Contraseñas Aleaatorias

console.log("Introduce la longitud de la contraseña deseada:")

var longitud = reaadline.question();

var contrasena = "ABCDEFGHIJKLMNOPQRSTUWXZY0123456789abcdefghijklmnopqrstuwxyz.,";
var contrasena = contrasena.split("");
var contrasena = contrasena.sort(function(){return 0.5 - Math.random()});
var contrasena = contrasena.slice(0, longitud).join("");

console.log("Tu contraseña aleatoria es: " + contrasena);

