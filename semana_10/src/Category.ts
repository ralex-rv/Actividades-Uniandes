
/* Generated with GenMyModel */

/*
/// <reference path="SeriesTV.ts" />
*/

import { SeriesTV } from "./SeriesTV.js";
    
export class Category
{
    // Attributes
	private _categoryName: string;    
	private seriesTV: Array<SeriesTV>;
	
    // Implemented attributes	
    // Operations
	constructor (
        categoryName: string = ''
        ) {
        this._categoryName = categoryName;
        this.seriesTV = [];
    }

    static showCategories (theCategories: Category[]): void {
		console.log(`El listado de categorias:`);

		theCategories.forEach((oneCategory) => {
			console.log(`- Genero: ${oneCategory.categoryName}`)			
		})
	}

	// Implemented operations
    public get categoryName(): string {
        return this._categoryName;
    }
    public set categoryName(value: string) {
        this._categoryName = value;
    }
}

