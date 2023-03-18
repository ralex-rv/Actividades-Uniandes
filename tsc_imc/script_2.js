"use strict";
var bodyMassIdx = 0;
var outputMsg = "";
var riskCondition;
(function (riskCondition) {
    riskCondition["Low"] = "Bajo";
    riskCondition["Medium"] = "Medio";
    riskCondition["High"] = "Alto";
})(riskCondition || (riskCondition = {}));
var height = Number(prompt("Ingrese su estatura"));
var weight = Number(prompt("Ingrese su peso"));
var age = Number(prompt("Ingrese su edad"));
bodyMassIdx = weight / (Math.pow(height, 2));
if (bodyMassIdx < 22.0 && age < 45) {
    outputMsg = riskCondition.Low;
}
else if ((bodyMassIdx < 22.0 && age >= 45) || (bodyMassIdx >= 22.0 && age < 45)) {
    outputMsg = riskCondition.Medium;
}
else if (bodyMassIdx >= 22.0 && age >= 45) {
    outputMsg = riskCondition.High;
}
alert(`La condicion del paciente según su imc y edad es ${outputMsg}`);
