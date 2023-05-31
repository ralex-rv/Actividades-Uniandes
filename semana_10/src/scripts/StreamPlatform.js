/* Generated with GenMyModel */
/*
/// <reference path="SeriesTV.ts" />
/// <reference path="Plan.ts" />
*/
export class StreamPlatform {
    constructor(platformName = '', urlDirection = '') {
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
    detailOnePlatform() {
        console.log(`- Nombre de la plataforma: ${this._platformName}, Direccion URL: ${this._urlDirection} `);
    }
    static showPlatforms(thePlatforms) {
        console.log(`El listado de plataformas:`);
        thePlatforms.forEach((theStreamPlatform) => {
            console.log(`- Nombre: ${theStreamPlatform.platformName}, Direccion URL: ${theStreamPlatform.urlDirection}`);
        });
    }
    get platformName() {
        return this._platformName;
    }
    set platformName(value) {
        this._platformName = value;
    }
    get urlDirection() {
        return this._urlDirection;
    }
    set urlDirection(value) {
        this._urlDirection = value;
    }
    get seriesTV() {
        return this._seriesTV;
    }
    set seriesTV(value) {
        this._seriesTV = value;
    }
    get plans() {
        return this._plans;
    }
    set plans(value) {
        this._plans = value;
    }
}
