//while
var year = 2018;

while(year != 2051){
    //ejecuta esto
    console.log('Estamos en el año: ' + year);

    //operadores de incremento y decremento
    //year++ //si no colocamos este contador se genera un buble infinito
    if (year == 2000){
        break;
    }
    year--;
}

//do while

var years = 30;

do {
    alert('Solo cuando sea diferente a 20');
    years--;
} while (years > 25);