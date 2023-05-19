/* Generated with GenMyModel */
import { Motorizado } from "./Motorizado.js";
export class Carro extends Motorizado {
    // Implemented attributes
    // Operations
    constructor(marca, modelo, color, ruedas, propietario, placa, velocidadMaxima, asientos) {
        super(marca, modelo, color, ruedas, propietario, placa, velocidadMaxima);
        this.asientos = asientos;
    }
}
