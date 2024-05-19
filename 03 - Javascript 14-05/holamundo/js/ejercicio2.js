/*
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos
hasta introducir un numero negativo y ahi mostrar el resultado.
*/

// var numero;
// var suma = 0;
// var contador = 0;
// while( true ){

//     numero = parseInt(prompt('Introduce un numero:', 0));
    
    
//     if (numero < 0) {
//         break;
//     }
    
//     suma += numero;
//     contador++;
// }

// if (contador > 0){
//     var media = suma / contador;
//     console.log("La suma de los números introducidos es: " + suma);
//     console.log("La media de los números introducidos es: " + media);
// }else{
//     console.log("No se han introducido números positivos.");
// }


var suma = 0;
var contador = 0;

do {
    var numero = parseInt(prompt('Introduce un numero:', 0));

    if (isNaN(numero)){
        numero = 0;

    }else if (numero >= 0){
        suma = suma + numero;
        //suma += numero;

        contador++;
    }

    console.log("La suma de los números introducidos es: " + suma);
} while (numero >= 0);



alert("La suma de todos los numeros es: " + suma);
alert("La media de todos los numeros es: " + (suma/contador));