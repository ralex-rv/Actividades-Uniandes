/* Generated with GenMyModel */
import { Vehiculo } from "./Vehiculo.js";
export class Motorizado extends Vehiculo {
    // Implemented attributes
    // Operations
    constructor(marca, modelo, color, ruedas, propietario, placa, velocidadMaxima) {
        super(marca, modelo, color, ruedas, propietario);
        this.placa = placa;
        this.velocidadMaxima = velocidadMaxima;
    }
}
