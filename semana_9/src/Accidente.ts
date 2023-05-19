
/* Generated with GenMyModel */

import { Vehiculo } from "./Vehiculo.js";
    
export class Accidente
{
    // Attributes
	private fecha: Date;	
	private descripcion: string;
	private severidad: number;
	private involucrados: Array<Vehiculo>;
	
	constructor (fecha: Date, descripcion: string, severidad: number) {
		this.fecha = fecha;
		this.descripcion = descripcion;
		this.severidad = severidad;
		this.involucrados = []
	}
    // Implemented attributes
	
    // Operations
	 
	// Implemented operations
	
}

