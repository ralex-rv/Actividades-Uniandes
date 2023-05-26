
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
	constructor (performerName: string, photoProfile: string, description: string) {
        super(performerName, photoProfile, description);
        this.seriesTV = [];
    } 

	// Implemented operations
	
}

