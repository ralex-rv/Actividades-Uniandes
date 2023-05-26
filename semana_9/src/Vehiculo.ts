
/* Generated with GenMyModel */

import { Accidente } from "./Accidente.js";
import { Persona } from "./Persona.js";

export abstract class Vehiculo {
    // Attributes
	private marca: string;
	private modelo: string;
	private color: string;
	private ruedas: number;
	private reportes: Array<Accidente>;	
	private _propietario: Persona;
	public get propietario(): Persona {
		return this._propietario;
	}
	public set propietario(value: Persona) {
		this._propietario = value;
	}

	constructor (marca: string, modelo: string, color: string, ruedas: number, propietario: Persona ) {
		this.marca = marca;
		this.modelo = modelo;
		this.color = color;
		this.ruedas = ruedas;
		this.reportes = [];
		this._propietario = propietario;		
	}
	
    // Implemented attributes
	
    // Operations
	abstract comprarVehiculo (elVehiculo: Vehiculo): void	
	
	// Implemented operations
	
}

