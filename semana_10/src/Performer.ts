
/* Generated with GenMyModel */
/*
/// <reference path="Person.ts" />
/// <reference path="SeriesTV.ts" />
*/
import { SeriesTV } from "./SeriesTV.js";    
import { Person } from "./Person.js"

export class Performer extends Person
{
    // Attributes
	private seriesTV: Array<SeriesTV>;
	
    // Implemented attributes	
    // Operations
	constructor (
        performerName: string = '',
        photoProfile: string = '',
        description: string = ''
        ) {
        super(performerName, photoProfile, description);
        //super(this.personName, this.photoProfile, this.descriptionPerson);
        this.seriesTV = [];
    } 

	// Implemented operations

    detailPerformer (): void {
        console.log(`- Nombre: ${this.personName}, Fotografia: ${this.photoProfile}, Descripcion: ${this.descriptionPerson}`);
    }
    /*
	getNamePerson() {
        return this.personName;
    }

    getPhotoPerson(): string {
        return this.photoProfile;
    }

    getDescription(): string {
        return this.descriptionPerson
    }
    */
}

