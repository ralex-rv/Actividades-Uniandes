
/* Generated with GenMyModel */

import { Accidente } from "./Accidente.js";
import { Persona } from "./Persona.js";

export class Vehiculo {
    // Attributes
	private marca: string;
	private modelo: string;
	private color: string;
	private ruedas: number;
	private reportes: Array<Accidente>;
	private propietario: Persona;

	constructor (marca: string, modelo: string, color: string, ruedas: number, propietario: Persona ) {
		this.marca = marca;
		this.modelo = modelo;
		this.color = color;
		this.ruedas = ruedas;
		this.reportes = [];
		this.propietario = propietario;		
	}
	
    // Implemented attributes
	
    // Operations
	
	// Implemented operations
	
}

