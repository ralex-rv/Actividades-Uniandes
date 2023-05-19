
/* Generated with GenMyModel */
import { Licencia_conduccion } from "./Licencia_conduccion.js";
import { Vehiculo } from "./Vehiculo.js";

export class Persona
{
    // Attributes
	private nombre: string;	
	private cedula: string;	
	private telefono: string;	
	private edad: number;	
	vehiculos: Array<Vehiculo>;	
	licenciaConduccion: Licencia_conduccion
    // Implemented attributes
	
    // Operations
	constructor (
		nombre: string,
		cedula: string,
		telefono: string,
		edad: number,
		licenciaConduccion: Licencia_conduccion
	) {
		this.nombre = nombre;
		this.cedula = cedula;
		this.telefono = telefono;
		this.edad = edad;
		this.vehiculos = [];
		this.licenciaConduccion = licenciaConduccion;
	}
	// Implemented operations	
	comprarVehiculo (elVehiculo: Vehiculo) {
		this.vehiculos.push(elVehiculo);
	}
	
	requerirPersona() {
		console.log(`La autoridad de transito realiza requerimiento`);
		this.licenciaConduccion.verificarLicencia();
	}
}

