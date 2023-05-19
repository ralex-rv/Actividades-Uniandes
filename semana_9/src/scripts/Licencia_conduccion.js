/* Generated with GenMyModel */
export class Licencia_conduccion {
    // Implemented attributes
    // Operations
    constructor(tipoLicencia, fechaExpedicion, vigencia, persona) {
        this.tipoLicencia = tipoLicencia;
        this.fechaExpedicion = fechaExpedicion;
        this.vigencia = vigencia;
        this.persona = persona;
    }
    // Implemented operations
    verificarLicencia() {
        console.log(`El conductor, en efecto, tiene su documentación en orden`);
    }
}
