/*
Hacer un programa que muestre todos los numeros entre dos numeros
introducidos por el usuario 
*/ 

var numero1 = parseInt(prompt("Introducir primer numero: ",0));
var numero2 = parseInt(prompt("Introducir segundo numero: ",0));

document.write("<h1>De"+numero1+" a "+numero2+"estan estos numeros:</h1>");

for (var index = numero1; index <= numero2; index++) {
    document.write(index+"<br />");
}