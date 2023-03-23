/**
 * Actividad repaso programación básica
 * Habilidades Intermedias Desarrollo SW - Agencia Distrital Atenea
 * Ejercicio 1: Presentar la condición de riesgo cardiovascular de un paciente según entradas
 * @author Alejandro Ruiz Vallejo <ra.ruiz@uniandes.edu.co>
 */


var bodyMassIdx:number = 0;
var outputMsg:string = "";
enum riskCondition {
	Low = "Bajo",
	Medium = "Medio",
	High = "Alto"
}

var height:number = Number(prompt("Ingrese su estatura"));
var weight:number = Number(prompt("Ingrese su peso"));
var age:number = Number(prompt("Ingrese su edad"));

bodyMassIdx = weight / (Math.pow(height, 2));

if (bodyMassIdx < 22.0 && age < 45) {
	outputMsg = riskCondition.Low;
} else if ((bodyMassIdx < 22.0 && age >= 45) || (bodyMassIdx >= 22.0 && age < 45)) {
	outputMsg = riskCondition.Medium;
} else if(bodyMassIdx >= 22.0 && age >= 45) {
	outputMsg = riskCondition.High;
}	

alert(`La condicion de riesgo del paciente según su imc y edad es ${outputMsg}`);


