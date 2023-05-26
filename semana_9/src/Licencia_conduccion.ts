
/* Generated with GenMyModel */

//import { Persona } from "./Persona.js";
    
export class Licencia_conduccion
{
    // Attributes
	private tipoLicencia: string;	
	private fechaExpedicion: Date;	
	private vigencia: Date;				
    // Implemented attributes
	
    // Operations
	constructor (
		tipoLicencia: string,
		fechaExpedicion: Date,
		vigencia: Date,				
	) {
		this.tipoLicencia = tipoLicencia;
		this.fechaExpedicion = fechaExpedicion;
		this.vigencia = vigencia;				
	}
	// Implemented operations
	verificarLicencia() {
		console.log(`El conductor, en efecto, tiene su documentación en orden`);
	}
}

