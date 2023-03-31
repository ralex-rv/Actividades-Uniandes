/**
 * Actividades semana 3: ejercicio 7 del curso
 * Teniendo un arreglo de objetos(data structure), implemetar el uso de la funcion map
 * donde el resultado de su iteración es un nuevo arreglo que contiene la concatenación
 * de las propiedades del arreglo original
 * Habilidades intermedias desarrollo SW - Agencia Distrital Atenea
 * @author Alejandro Ruiz Vallejo <ra.ruizv@uniandes.edu.co>
 */

// Definir el objeto y sus propiedades 
type user = {
	firstName: string,
	lastName: string
}

// Se concatenan las propiedades
function unificarCampos(theUser: user): string{
	return (theUser.firstName).concat(" " + theUser.lastName);
}

/* 
 * Devuelve un nuevo arreglo resultado de llamar la función previa sobre cada
 * objeto del arreglo
 */
function setArray(oldArray: user[]): string[] {    
    return oldArray.map<string>(e => unificarCampos(e))
}

// PROGRAMA PRINCIPAL
function start_app(): void{
	
	let users = [
		{firstName: "Susan", lastName: "Steward"},
		{firstName: "Daniel", lastName: "Longbottom"},
		{firstName: "Jacob", lastName: "Black"}
	];
	
	console.log(users);
	let userFullNames = setArray(users);
	console.log(userFullNames);
}

// inicializacion
start_app();




