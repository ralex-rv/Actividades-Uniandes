
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
	private _platformName: string;
	private _urlDirection: string;
	private _seriesTV: Array<SeriesTV>;	
	private _plans: Array<Plan>;
	    
	constructor (
		platformName: string = '',
		urlDirection: string = '',
		) {
		this._platformName = platformName;
		this._urlDirection = urlDirection;
		this._seriesTV = [];
		this._plans = [];
	}
	/*
	showSeriesTV (): void {
		console.log(`El listado de de series para ${this._platformName}`)

		this._seriesTV.forEach((seriesTV) => {
			console.log(`- Nombre: ${seriesTV.seriesName}, Imagen representativa: ${seriesTV.poster}`)
		});
	}
	*/

	detailOnePlatform (): void {
		console.log(`- Nombre de la plataforma: ${this._platformName}, Direccion URL: ${this._urlDirection} `);
	}
	
	static showPlatforms (thePlatforms: StreamPlatform[]): void {
		console.log(`El listado de plataformas:`);

		thePlatforms.forEach((theStreamPlatform) => {
			console.log(`- Nombre: ${theStreamPlatform.platformName}, Direccion URL: ${theStreamPlatform.urlDirection}`);
		});
	}

	public get platformName(): string {
		return this._platformName;
	}
	public set platformName(value: string) {
		this._platformName = value;
	}

	public get urlDirection(): string {
		return this._urlDirection;
	}
	public set urlDirection(value: string) {
		this._urlDirection = value;
	}

	public get seriesTV(): Array<SeriesTV> {
		return this._seriesTV;
	}
	public set seriesTV(value: Array<SeriesTV>) {
		this._seriesTV = value;
	}

	public get plans(): Array<Plan> {
		return this._plans;
	}
	public set plans(value: Array<Plan>) {
		this._plans = value;
	}
	
}

