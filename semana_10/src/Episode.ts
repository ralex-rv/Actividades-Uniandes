
/* Generated with GenMyModel */
/*
/// <reference path="SeriesTV.ts" />
*/
import { SeriesTV } from "./SeriesTV.js";
    
export class Episode
{
    // Attributes
	private episodeName: string;
	private summary: string;
	private duration: number;
	private serieTV: SeriesTV;
	
    // Implemented attributes	
    // Operations
	constructor (
		episodeName: string = '',
		summary: string = '',
		duration: number = 0,
		serieTV: SeriesTV = new SeriesTV()
		) {
		this.episodeName = episodeName;
		this.summary = summary;
		this.duration = duration;
		this.serieTV = serieTV;
	} 

	// Implemented operations
	
}

