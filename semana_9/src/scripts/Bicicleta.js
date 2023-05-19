/* Generated with GenMyModel */
import { Vehiculo } from "./Vehiculo.js";
export class Bicicleta extends Vehiculo {
    // Implemented attributes
    // Operations
    constructor(marca, modelo, color, ruedas, propietario, tipo, luces) {
        super(marca, modelo, color, ruedas, propietario);
        this.tipo = tipo;
        this.luces = luces;
    }
}
