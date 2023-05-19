
/* Generated with GenMyModel */

import { Vehiculo } from "./Vehiculo.js";
import { Persona } from "./Persona.js";
    
export class Bicicleta extends Vehiculo
{
    // Attributes
	private tipo: string;
	private luces: boolean;
	
    // Implemented attributes
	
    // Operations
	constructor (marca: string, modelo: string, color: string, ruedas: number, propietario: Persona, tipo: "urbana" | "deportiva", luces: boolean) {
        super(marca, modelo, color, ruedas, propietario)
        this.tipo = tipo;
        this.luces = luces;    
    }
	// Implemented operations
	
}

