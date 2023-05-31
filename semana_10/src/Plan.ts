
/* Generated with GenMyModel */
/*
/// <reference path="StreamPlatform.ts" />
*/
import { StreamPlatform } from "./StreamPlatform.js";
    
export class Plan
{
    // Attributes
	private cost: number;
	private planName: string;
	private description: string;
	private streamPlatform: StreamPlatform;
	
    // Implemented attributes	
    // Operations
	constructor (
		cost: number = 0,
		planName: string = '',
		description: string = '',
		streamPlatform : StreamPlatform = new StreamPlatform()
		) {
		this.cost = cost;
		this.planName = planName;
		this.description = description;
		this.streamPlatform = streamPlatform;
	} 

	// Implemented operations
	
}

