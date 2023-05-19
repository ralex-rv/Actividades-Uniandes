/* Generated with GenMyModel */
import { Motorizado } from "./Motorizado.js";
export class Motocicleta extends Motorizado {
    // Implemented attributes
    // Operations
    constructor(marca, modelo, color, ruedas, propietario, placa, velocidadMaxima, cilindraje) {
        super(marca, modelo, color, ruedas, propietario, placa, velocidadMaxima);
        this.cilindraje = cilindraje;
    }
}
