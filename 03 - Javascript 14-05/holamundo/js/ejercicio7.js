/**
 * tabla de multiplicar de un numero introducido por pantalla.
 */

var numero = parseInt(prompt('¿De que numero quieres la tabla?'));

for(var i = 1; i <= 10; i++){
    document.write(i+" x "+numero+" = "+(i*numero)+ "<br/>");
   
}

for (var c = 1; c <=10; c++){
    document.write("<h1>Table del "+c+ "</h1>");
    for(var i = 1; i <= 10; i++){
        document.write(i+" x "+c+" = "+(i*c)+"<br/>");
    }
}