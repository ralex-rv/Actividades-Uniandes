/* Generated with GenMyModel */
import { Licencia_conduccion } from "./Licencia_conduccion.js";
export class Persona {
    // Implemented attributes
    // Operations
    constructor(nombre, cedula, telefono, edad, tipoLicencia, fechaExpedicion, vigencia) {
        this.nombre = nombre;
        this.cedula = cedula;
        this.telefono = telefono;
        this.edad = edad;
        this.vehiculos = [];
        this.licenciaConduccion = new Licencia_conduccion(tipoLicencia, fechaExpedicion, vigencia, this);
    }
    // Implemented operations
    requerirPersona() {
        console.log(`La autoridad de transito realiza requerimiento`);
        this.licenciaConduccion.verificarLicencia();
    }
}
