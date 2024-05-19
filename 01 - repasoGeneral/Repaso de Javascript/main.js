//Alertas
//alert("Hola Soy Luis ");

//variables
let nombre = 'Luis';
nombre = 'Luis Alberto';


//contantes 
const apellido = 'Caballero'
const PI = 3.1416;

//otra variable
let altura = 170;

//A una variable const no se le puede cambiar el valor
// altura = 1.73;


let concatenacion = nombre + " " + altura;
console.log(concatenacion);


//mostrar en consola
console.log(nombre);
console.log(altura);

//seleccionar elementos del DOM
let datos = document.querySelector('#datos');
datos.innerHTML = `
    <h1>Soy la caja de Datos</h1>
    <h2>Mi nombre es: ${nombre} ${apellido}</h2>
    <h3>Mi altura es: ${altura}</h3>
`;

//condiones 
altura = 173;
if(altura >= 170){
    datos.innerHTML += `<h1>Eres una persona alta</h1>`;
}else{
    datos.innerHTML += `<h1>Eres una persona baja</h1>`;
}

//Bucles
for(let year = 2000; year <= 2023; year++){
   datos.innerHTML += `<h2>Estamos en el año: ${year} </h2>`;
}

//arrays
let nombres = ['Luis', 'Alberto', 'Pepe'];

let divNombres = document.querySelector('#nombres');

//divNombres.innerHTML = nombres[2];
divNombres.innerHTML = `<h1>Listado de nombres</h1><ul>`;

// nombres.forEach(nombre => {
//     divNombres.innerHTML += "<li>"+nombre+"</li>";
// });

for(let nombre of nombres){
    divNombres.innerHTML += "<li>"+nombre+"</li>";
}
divNombres.innerHTML += `</ul>`;

//Funciones

const miInformacion = (nombre, altura) => { 
    let misDatos = `
    <h1>Soy la caja de Datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm.</h3>
    `;
    return misDatos;
}

console.log();

const imprimir = () => {
    let datos = document.querySelector('#datos');
    datos.innerHTML = miInformacion('Luis Caballero', 173);
}

imprimir();


