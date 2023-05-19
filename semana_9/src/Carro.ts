
/* Generated with GenMyModel */

import { Motorizado } from "./Motorizado.js"
import { Persona } from "./Persona.js";
    
export class Carro extends Motorizado
{
    // Attributes
	private asientos: number;
	
    // Implemented attributes
	
    // Operations
	constructor (marca: string, modelo: string, color: string, ruedas: number, propietario: Persona, placa: string, velocidadMaxima:number, asientos: number) {
        super(marca, modelo, color, ruedas, propietario, placa, velocidadMaxima);
        this.asientos = asientos;
    } 
	// Implemented operations
	
}

