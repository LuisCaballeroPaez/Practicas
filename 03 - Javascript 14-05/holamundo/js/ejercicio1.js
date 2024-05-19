/*
Programa que pida dos numeros y que nos diga cuel es el mayor, 
el menor y si son iguales.
Plus: si introduciomos letras o numeros menores o igual a 0 
*/

var numero1 = parseInt(prompt('Ingrese primer numero:',0));
var numero2 = parseInt(prompt('Ingrese segundo numero:',0)); 

while( numero1 <= 0 || numero2 <= 0 || isNaN (numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Ingrese primer numero:',0));
    numero2 = parseInt(prompt('Ingrese segundo numero:',0)); 
}

if(numero1 == numero2){
    alert("Son iguales");
}else if (numero1 > numero2){
    alert("el numero mayor es: "+ numero1);
    alert("el numero mayor es: "+ numero2);
}else if (numero2 > numero1){
    alert("el numero mayor es: "+ numero1);
    alert("el numero mayor es: "+ numero2);
}else{
    alert('Introduce numero correctos');
}

