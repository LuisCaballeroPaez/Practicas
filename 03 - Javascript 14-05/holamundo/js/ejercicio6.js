/**
 * que nos diga si un numero es par o impar.
 * 1- ventana prompt
 * 2- Si no es valido que nos pida de nuevo un numero
 */
/*
var numero;

while(true){
    numero = parseInt(prompt("Introduce un numero",0));

    if (!isNaN(numero)) {
        break;
    } else {
        console.log("Los divisores de " + numero + " son:");
    }
}    

if (numero % 2 === 0) {
    console.log(numero + " es un número par.");
} else {
    console.log(numero + " es un número impar.");
}*/

var numero = parseInt(prompt("Introduce un numero:", 0));

while(isNaN(numero)){
    numero = parseInt(prompt("Introduce un numero:", 0));
}
if (numero % 2 == 0) {
    console.log(numero + " es un número par.");
} else {
    console.log(numero + " es un número impar.");
}