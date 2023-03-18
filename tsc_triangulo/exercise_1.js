"use strict";
var cathetus_x = Number(prompt("Ingrese cateto x:"));
var cathetus_y = Number(prompt("Ingrese cateto y:"));
var hypotenuse = 0;
hypotenuse = Math.sqrt(Math.pow(cathetus_x, 2) + Math.pow(cathetus_y, 2));
alert(`La hipotenusa del triangulo rectangulo es ${hypotenuse}`);
