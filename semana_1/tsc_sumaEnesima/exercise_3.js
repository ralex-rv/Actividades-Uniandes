"use strict";
/**
 * Actividad repaso programación básica Ejercicio 3
 * Habilidades Intermedias Desarrollo SW - Agencia Distrial Atenea
 * @author Alejandro Ruiz Vallejo <ra.ruizv@uniandes.edu.co>
 */
var counter;
var sum = 0;
var numberUsr = Number(prompt("Ingrese un numero natural. Este es el ultimo de la suma"));
for (counter = 0; counter <= numberUsr; counter++) {
    sum += counter;
}
alert(`La suma de los primeros ${numberUsr} es ${sum}`);
