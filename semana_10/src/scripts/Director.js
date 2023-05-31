import { Person } from "./Person.js";
export class Director extends Person {
    // Implemented attributes	
    // Operations
    constructor(directorName = '', photoProfile = '', description = '') {
        super(directorName, photoProfile, description);
        //super(this.personName, this.photoProfile, this.descriptionPerson)
        this.seriesTV = [];
    }
    // Implemented operations
    detailDirector() {
        console.log(`- Nombre: ${this.personName}, Fotografia: ${this.photoProfile}, Descripcion: ${this.descriptionPerson}`);
    }
}
