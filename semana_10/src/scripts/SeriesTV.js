/* Generated with GenMyModel */
/*
/// <reference path="Performer.ts" />
/// <reference path="Director.ts" />
/// <reference path="Episode.ts" />
/// <reference path="Category.ts" />
/// <reference path="StreamPlatform.ts" />
*/
export class SeriesTV {
    // Implemented attributes
    // Operations
    constructor(seriesName = '', poster = '') {
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
    detailOneSeries() {
        console.log(`- Nombre de la serie: ${this._seriesName}, Imagen representativa: ${this._poster} `);
    }
    static showSeries(theSeriesTV) {
        console.log(`El listado de las series:`);
        theSeriesTV.forEach((oneSeriesTV) => {
            console.log(`- Nombre: ${oneSeriesTV.seriesName}, Imagen representativa: ${oneSeriesTV.poster} `);
        });
    }
    showPerformersAndDirectors() {
        console.log(`El listado de directores y artistas para esta serie ${this.seriesName}`);
        this.performers.forEach((performer) => {
            console.log(`- Nombre: ${performer.personName}, Fotografía: ${performer.photoProfile}, Descripción: ${performer.descriptionPerson}`);
        });
        this.directors.forEach((director) => {
            console.log(`- Nombre: ${director.personName}, Fotografía: ${director.photoProfile}, Descripción: ${director.descriptionPerson}`);
        });
    }
    agregateCategory(theCategory) {
        this._categories.push(theCategory);
    }
    agregatePerformer(thePerformer) {
        this._performers.push(thePerformer);
    }
    agregateDirector(theDirector) {
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
    get seriesName() {
        return this._seriesName;
    }
    set seriesName(value) {
        this._seriesName = value;
    }
    get poster() {
        return this._poster;
    }
    set poster(value) {
        this._poster = value;
    }
    get performers() {
        return this._performers;
    }
    set performers(value) {
        this._performers = value;
    }
    get directors() {
        return this._directors;
    }
    set directors(value) {
        this._directors = value;
    }
    get streamPlatforms() {
        return this._streamPlatforms;
    }
    set streamPlatforms(value) {
        this._streamPlatforms = value;
    }
    get episodes() {
        return this._episodes;
    }
    set episodes(value) {
        this._episodes = value;
    }
    get categories() {
        return this._categories;
    }
    set categories(value) {
        this._categories = value;
    }
}
