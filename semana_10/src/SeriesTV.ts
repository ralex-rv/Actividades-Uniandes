
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
	private _seriesName: string;	
	private _poster: string;	
	private _directors: Array<Director>;	
	private _performers: Array<Performer>;
	private _streamPlatforms: Array<StreamPlatform>;
	private _episodes: Array<Episode>;
	private _categories: Array<Category>;
	
		
    // Implemented attributes
	
    // Operations
	constructor (
		seriesName: string = '',
		poster: string = '',		
		) {
		this._seriesName = seriesName;
		this._poster = poster;
		this._directors = [];
		this._performers = [];
		this._streamPlatforms = [];
		this._episodes = [];
		this._categories = [];
	}
	
	// Implemented operations
	/*
	showPlatforms (): void {
		console.log(`El listado de plataformas:`);

		this._streamPlatforms.forEach((streamPlatform) => {
			console.log(`- Nombre: ${streamPlatform.platformName}, Direccion URL: ${streamPlatform.urlDirection}`);
		});
	}
	*/

	detailOneSeries (): void {
		console.log(`- Nombre de la serie: ${this._seriesName}, Imagen representativa: ${this._poster} `);		
	}

	static showSeries(theSeriesTV: SeriesTV[]): void {
		console.log(`El listado de las series:`);
		theSeriesTV.forEach((oneSeriesTV) => {
			console.log(`- Nombre: ${oneSeriesTV.seriesName}, Imagen representativa: ${oneSeriesTV.poster} `);			
		});
	}
	
	showPerformersAndDirectors (): void {
		console.log(`El listado de directores y artistas para esta serie ${this.seriesName}`);

		this.performers.forEach((performer) => {
			console.log(`- Nombre: ${performer.personName}, Fotografía: ${performer.photoProfile}, Descripción: ${performer.descriptionPerson}`);
		});

		this.directors.forEach((director) => {
			console.log(`- Nombre: ${director.personName}, Fotografía: ${director.photoProfile}, Descripción: ${director.descriptionPerson}`);
		});
	}
	
	agregateCategory(theCategory: Category): void {
		this._categories.push(theCategory);
	}

	agregatePerformer(thePerformer: Performer ): void {
		this._performers.push(thePerformer);
	}

	agregateDirector(theDirector: Director): void {
		this._directors.push(theDirector);
	}

	/*
	showCategories (): void {
		console.log(`El listado de categorias:`);

		this._categories.forEach((category) => {
			console.log(`- Genero: ${category.categoryName}`)			
		})
	}
	*/
	public get seriesName(): string {
		return this._seriesName;
	}
	public set seriesName(value: string) {
		this._seriesName = value;
	}

	public get poster(): string {
		return this._poster;
	}
	public set poster(value: string) {
		this._poster = value;
	}

	public get performers(): Array<Performer> {
		return this._performers;
	}
	public set performers(value: Array<Performer>) {
		this._performers = value;
	}

	public get directors(): Array<Director> {
		return this._directors;
	}
	public set directors(value: Array<Director>) {
		this._directors = value;
	}

	public get streamPlatforms(): Array<StreamPlatform> {
		return this._streamPlatforms;
	}
	public set streamPlatforms(value: Array<StreamPlatform>) {
		this._streamPlatforms = value;
	}
	
	public get episodes(): Array<Episode> {
		return this._episodes;
	}
	public set episodes(value: Array<Episode>) {
		this._episodes = value;
	}

	public get categories(): Array<Category> {
		return this._categories;
	}
	public set categories(value: Array<Category>) {
		this._categories = value;
	}
	
}

