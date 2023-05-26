
/* Generated with GenMyModel */
/*
/// <reference path="SeriesTV.ts" />
/// <reference path="Plan.ts" />
*/

import { SeriesTV } from "./SeriesTV.js";
import { Plan } from "./Plan.js";
    
export class StreamPlatform
{
    // Attributes
	private platformName: string;
	private urlDirection: string;
	private seriesTV: Array<SeriesTV>;
	private plans: Array<Plan>;
	
    // Implemented attributes	
    // Operations
	constructor (platformName: string, urlDirection: string) {
		this.platformName = platformName;
		this.urlDirection = urlDirection;
		this.seriesTV = [];
		this.plans = [];
	} 

	// Implemented operations
	
}

