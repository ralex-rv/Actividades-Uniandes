/** 
 * Actividad arreglos
 * Ejercicio 2: Dado un arreglo (a) de enteros y otro (b) de literales, ambos con la misma
 * cantidad de elementos, crear uno resultante (c) en el cual se concatenen estos
 * Habilidades Intermedias Desarrollo SW - Agencia Distrital Atenea
 * @author Alejandro Ruiz Vallejo <ra.ruizv@uniandes.edu.co>
 */

var a: number[] = [0,2,4,6,8,10];
var b: string[] = ["a","b","c","d","e","f"];
var t: string[] = a.map(item => (String(item)));
var c: string[] = [];

for (let index = 0; index < b.length; index++) {
    c.push(b[index].concat(t[index]));
}

alert(`El elemento de la tercera posición es: ${c[2]}`);
alert(`El arreglo resultante es: ${c}`);