//ecmaScript 2021 / ES12 / ES.next

// variables: var, let , const
//contenedor de informacion, caja para guardar un dato

var nombre = 'Luis Caballero';


//var: tienen un ambito global o funcional
function mostrarNombre() {
    var nombre = 'Pepito';
    var apellido = 'Perez';
    console.log('Dentro:', nombre);
    console.log('Dentro:', apellido);
}
/*
mostrarNombre();
console.log('fuera:', nombre);
console.log('fuera:', apellido);*/


// let: ambito en bloque
let pais = 'Argentina';

function mostrarPais() {
    //console.log(pais);
}

//mostrarPais();
if (pais == 'Argentina'){
    let continente = 'sudamericano';
    //console.log(continente);
}
//No accesible desde fuera del bloque
//console.log('Fuera',continente);

for (contador = 0; contador <= 5; contador++){
    //console.log(contador);
}

//console.log('Contador', contador)



//const: crear constantes o variable que su contenido no es variable.
let edad = 18;

console.log(edad);

edad = 12;

console.log(edad);

//las variable con const deben ser aquellas que no cambien con el tiempo.
 const ciudad = 'San jose de Jáchal';
 const fechaNacimiento = 1980;

 console.log(ciudad, fechaNacimiento);











