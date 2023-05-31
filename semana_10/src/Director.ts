
/* Generated with GenMyModel */
/*
/// <reference path="Person.ts" />
/// <reference path="SeriesTV.ts" />
*/
import { SeriesTV } from "./SeriesTV.js";
import { Person } from "./Person.js"; 

export class Director extends Person
{
    // Attributes
	private seriesTV: Array<SeriesTV>;
	
    // Implemented attributes	
    // Operations
	constructor (
        directorName: string = '',
        photoProfile: string = '',
        description: string = ''
        ) {
        super(directorName, photoProfile, description)
        //super(this.personName, this.photoProfile, this.descriptionPerson)
        this.seriesTV = [];
    }
	// Implemented operations

    detailDirector (): void {
        console.log(`- Nombre: ${this.personName}, Fotografia: ${this.photoProfile}, Descripcion: ${this.descriptionPerson}`);
    }
    /*
	getNamePerson(): string {
        return ;
    }

    getPhotoPerson(): string {
        return this.photoProfile;
    }

    getDescription(): string {
        return this.descriptionPerson;
    }
    */
}

