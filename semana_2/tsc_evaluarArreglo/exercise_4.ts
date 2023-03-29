/**
 * Actividad arreglos
 * Ejercicio 1: En un arreglo de enteros encontar el menor, el mayor de los elementos y la media
 * de todos los elementos en este
 * Habilidades Intermedias Desarrollo SW - Agencia Distrital Atenea
 * @author Alejandro Ruiz Vallejo <ra.ruizv@uniandes.edu.co>
 */

var stringUser: string = String(prompt("Ingrese un conjunto de enteros separados por coma:"));
var arrayText: string[] = stringUser.split(",");
var arrayNumber: number[] = arrayText.map((elemento) => Number(elemento));


var minor: number = arrayNumber[0];
var major: number = arrayNumber[0];
var average: number = 0;
var sum: number = 0;

for (let index = 1; index < arrayNumber.length; index++){
    if (arrayNumber[index] < minor) {
        minor = arrayNumber[index];
    } else if (arrayNumber[index] > major) {
        major = arrayNumber[index];    
    }
 }

for (let index = 0; index < arrayNumber.length; index++) {
    sum += arrayNumber[index];    
}

average = sum / arrayNumber.length;

alert(`El arreglo de enteros es: ${arrayNumber}`);
alert(`El menor de los elementos es: ${minor}`);
alert(`El mayor de los elementos es: ${major}`);
alert(`La media de los elementos es: ${average}`);