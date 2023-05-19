
/* Generated with GenMyModel */

import { Motorizado } from "./Motorizado.js";
import { Persona } from "./Persona.js"; 
    
export class Motocicleta extends Motorizado
{
    // Attributes
	private cilindraje: number;
	
    // Implemented attributes
	
    // Operations
	constructor (marca: string, modelo: string, color: string, ruedas: number, propietario: Persona, placa: string, velocidadMaxima:number, cilindraje: number) {
        super(marca, modelo, color, ruedas, propietario, placa, velocidadMaxima);
        this.cilindraje = cilindraje; 
    }
	// Implemented operations
	
}

