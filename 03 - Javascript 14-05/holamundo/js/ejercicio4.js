/**
 * Mostar todos los numeros imprares que hay entre dos numeros introducidos 
 * por el usuario.
 */

/*var numero1 = parseInt(prompt("Introduce el primer numero",0));

var numero2 = parseInt(prompt("Introduce el segundo numero",0));

while(numero1 < numero2){
    numero1++;

    if(numero1 % 2 !=0){
        console.log("El " + numero1 + " es inpar")
    }
} */

var numeroInicial = parseInt(prompt("Introduce el primer número:"));
var numeroFinal = parseInt(prompt("Introduce el segundo número:"));


if (isNaN(numeroInicial) || isNaN(numeroFinal)) {
    console.log("Por favor, introduce números válidos.");
} else {
    console.log("Números impares entre " + numeroInicial + " y " + numeroFinal + ":");

    
    var contador = numeroInicial;

   
    while (contador <= numeroFinal) {
   
        if (contador % 2 !== 0) {
            console.log(contador);
        }
       
        contador++;
    }
}