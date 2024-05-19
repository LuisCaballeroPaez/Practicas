/**
 * Muetre todos los numeros divisores de un numero intruduce en 
 * prompt.
 */
/*
var numero = parseInt(prompt("Mete un numero", 1));

if (isNaN(numero)) {
    console.log("Por favor, introduce un número válido.");
} else {
    console.log("Los divisores de " + numero + " son:");

    for (var i = 1; i <= numero; i++) {
        if (numero % i == 0) {
            console.log("Divisor:" + i);

        }
    }
}*/


var numero = parseInt(prompt("Introduce un número:"));


if (isNaN(numero)) {
    console.log("Por favor, introduce un número válido.");
} else {
    console.log("Los divisores de " + numero + " son:");

    
    for (var i = 1; i <= numero; i++) {
        
        if (numero % i == 0) {
            console.log(i);
        }
    }
}