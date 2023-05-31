import { Person } from "./Person.js";
export class Performer extends Person {
    // Implemented attributes	
    // Operations
    constructor(performerName = '', photoProfile = '', description = '') {
        super(performerName, photoProfile, description);
        //super(this.personName, this.photoProfile, this.descriptionPerson);
        this.seriesTV = [];
    }
    // Implemented operations
    detailPerformer() {
        console.log(`- Nombre: ${this.personName}, Fotografia: ${this.photoProfile}, Descripcion: ${this.descriptionPerson}`);
    }
}
