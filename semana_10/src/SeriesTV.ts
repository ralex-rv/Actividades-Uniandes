
/* Generated with GenMyModel */
/*
/// <reference path="Performer.ts" />
/// <reference path="Director.ts" />
/// <reference path="Episode.ts" />
/// <reference path="Category.ts" />
/// <reference path="StreamPlatform.ts" />
*/

import { StreamPlatform } from "./StreamPlatform.js";
import { Director } from "./Director.js" 
import { Performer } from "./Performer.js" 
import { Episode } from "./Episode.js"
import { Category } from "./Category.js"

export class SeriesTV
{
    // Attributes
	private seriesName: string;
	private poster: string;
	private director: Director;
	private performers: Array<Performer>;
	private streamPlatforms: Array<StreamPlatform>;
	private episodes: Array<Episode>;
	private categories: Array<Category>;
		
    // Implemented attributes
	
    // Operations
	constructor (seriesName: string, poster: string, director: Director) {
		this.seriesName = seriesName;
		this.poster = poster;
		this.director = director;
		this.performers = [];
		this.streamPlatforms = [];
		this.episodes = [];
		this.categories = [];
	}
	
	// Implemented operations
	
}

