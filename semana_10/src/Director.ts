
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
	constructor (directorName: string, photoProfile: string, description: string) {
        super(directorName, photoProfile, description)
        this.seriesTV = [];
    }
	// Implemented operations
	
}

