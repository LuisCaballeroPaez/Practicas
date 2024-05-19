//string

let nombre = 'Luis Caballero';

//number

let numero = 14;
let decimal = 3.2;

// Boolean / booleano
let  mayor_edad = true;
let menor_edad = 0;    //1 es true, 0 es false

//Array

let paises = ['España' , 'Mexico' , 'Colombia' , 'Argentina'];

//null

let vacio = null;

//Undefined
let no_definido = undefined;

/*
console.log(
    typeof nombre,
    typeof numero,
    typeof decimal,
    typeof mayor_edad,
    typeof menor_edad,
    typeof paises,

    typeof(paises[1]),
    typeof vacio,
    typeof no_definido
);*/

//json - Javascript Object Notation - Objetos Literales

let pelicula = {
    titulo: 'Space Jan',
    genero: 'Animacion',
    anio: 1996,
    director: 'Tarantino',
    mostrar: function () {
        return `
            **** La Pelicula de la semana ****
            ${ this.titulo } - ${ this.genero }
        `;
    }
}

console.log(pelicula.mostrar());


console.log(pelicula.titulo, ' - ', pelicula.genero, ' - ', pelicula.anio);





