//Funciones 
// Una funcion es un agrupacion reutilizable de un conjunto de instrucciones.


//Defino la funcion
/*
function calculador() {

    Conjuento de instruciones a ejecutar
    console.log("Hola soy la calculadora")
    console.log("si soy yo");

    return "Hola Soy la calculadora";

}*/

//Invocar o llamar la funcion
//calculador();
/*
function calculadora(numero1, numero2 , mostrar = false) {
    if(mostrar == false){
        console.log("Suma: " + (numero1 + numero2));
        console.log("Resta: " + (numero1 - numero2));
        console.log("Multiplicacion: " + (numero1 * numero2));
        console.log("Division: " + (numero1 / numero2));
        console.log("***********************************");
    } else{
        document.write("Suma: " + (numero1 + numero2)+ "<br/>");
        document.write("Resta: " + (numero1 - numero2) + "<br/>");
        document.write("Multiplicacion: " + (numero1 * numero2)+ "<br/>");
        document.write("Division: " + (numero1 / numero2) + "<br/>");
        document.write("********************************" + "<br/>");
    }
    
    //return "Hola soy la calculadora";
}*/

function porConsola(numero1, numero2) {
    console.log("Suma: " + (numero1 + numero2));
    console.log("Resta: " + (numero1 - numero2));
    console.log("Multiplicacion: " + (numero1 * numero2));
    console.log("Division: " + (numero1 / numero2));
    console.log("***********************************");
}

function porPantalla(numero1, numero2) {
    document.write("Suma: " + (numero1 + numero2)+ "<br/>");
    document.write("Resta: " + (numero1 - numero2) + "<br/>");
    document.write("Multiplicacion: " + (numero1 * numero2)+ "<br/>");
    document.write("Division: " + (numero1 / numero2)+ "<br/>");
    document.write("***********************************");
}

function calculadora(numero1, numero2, mostrar= false){
    if(mostrar == false){
        porConsola(numero1, numero2);
    }else{
        porPantalla(numero1, numero2)
    }
    return true;
}

calculadora(12 , 12);

calculadora(12, 8, true);
//calculadora(98, 2);

/*
for (var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i , 8);
}*/

