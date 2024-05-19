//Strings Clasicos

let nombre = 'Luis';

let apelido = 'Caballero';

let profesion = 'Tecnico informatico'

let nya = nombre + ' ' + apelido + ' ' + profesion;



let planilla = `
    ${nombre} ${apelido} 
    ${profesion}
`;
console.log(nya);
console.log(planilla);


function ficha(nombre, apelido , profesion) {
  let fichaTecnica = `
    <div class ='ficha'>
        <h2>${nombre} ${apelido}</h2>
        <h3>${profesion}</h3>
        <p>Texto pertenece a ficha tecnica</p>
    <div>
`;  
    return fichaTecnica
}


let cajaFicha = document.createElement('section');


cajaFicha.innerHTML += ficha('Luis', 'Caballero' , 'Tecnico informatico');


cajaFicha.innerHTML += ficha('Pepito', 'Perez' , 'Desarrollador Web');;


cajaFicha.innerHTML += ficha('Juan', 'Pala' , 'Diseñador Web');


document.addEventListener('DOMContentLoaded', function () {
    document.body.appendChild(cajaFicha);
}, false);