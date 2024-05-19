//Pruebas con let y var


//prueba con var
var numero = 40;
console.log(numero);

if (true){
    var numero = 50;
    console.log(numero); //valor 50
}

console.log(numero) //valor 50

//Pruba con let

var texto = 'Curso de Javascripts';
console.log(texto);

if(true){
    let texto = 'Curso de html y css';
    console.log(texto);
}

console.log(texto); //valor js