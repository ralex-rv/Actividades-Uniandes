
/* Generated with GenMyModel */

import { Vehiculo } from "./Vehiculo.js"
import { Persona } from "./Persona.js";
    
export class Motorizado extends Vehiculo
{
    // Attributes
	placa: string;
	velocidadMaxima: number;
	
    // Implemented attributes
	
    // Operations
	constructor ( marca: string, modelo: string, color: string, ruedas: number, propietario: Persona, placa: string, velocidadMaxima: number ) {
        super(marca, modelo, color, ruedas, propietario)
        this.placa = placa;
        this.velocidadMaxima = velocidadMaxima;
    }
	// Implemented operations
	
}

