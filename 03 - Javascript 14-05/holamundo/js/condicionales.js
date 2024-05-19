//condicional if
//
// Una condicional "if" es una estructura de control en programación que permite 
// tomar decisiones basadas en condiciones específicas. Esta condicional evalúa 
// una expresión booleana y ejecuta un bloque de código si esa expresión es 
// verdadera (true), de lo contrario, puede ejecutar otro bloque de código 
// o simplemente continuar con la ejecución del programa.


// let edad1 = 30;
// let edad2 = 50;
// if (edad1 > edad2) {
//     console.log('Edad uno es mayor que edad 2')
// }else{
//     console.log('La edad uno es inferior')
// }


var edad = 76;
var nombre = 'David Suarez';
/*operadores relacionales
    mayor >
    menor <
    mayor o igual >=
    menor o igual <=
    igual ==
    estricto ===
    Distinto !=
*/
if (edad >= 18 ){
    //Es mayor de edad.
    console.log(nombre + ' Tiene ' + edad + ' años, es mayor de edad.');
    if (edad  <= 33){
        console.log('Todavia eres millenial')
    }else if (edad >= 70){
        console.log('Eres anciano')
    }else{
        console.log('Ya no eres millenial')
    }

}else{
      //Es menor de edad.
      console.log(nombre + ' Tiene ' + edad + ' años, es menor de edad.');
}
/*
//Operadores logicos.
AND(Y) &&
OR(O)  ||
Negacion !
*/

// Negacion 

var year =2018;

if(year != 2023){
    console.log('El año no es 2024, realmente es:' + year);
}

//AND
if(year >= 2000 && year <= 2020){
    console.log('Estamos en la era actual');
} else {
    console.log('Estamos en la era post moderna');
}


//OR
if (year == 2008 || (year >= 2018 && year == 2028)) {
    console.log('El año aca en 8');
}else{
    console.log('AÑO NO REGISTRADO')
}






