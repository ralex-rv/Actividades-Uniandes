/* Generated with GenMyModel */
export class Category {
    // Implemented attributes	
    // Operations
    constructor(categoryName = '') {
        this._categoryName = categoryName;
        this.seriesTV = [];
    }
    static showCategories(theCategories) {
        console.log(`El listado de categorias:`);
        theCategories.forEach((oneCategory) => {
            console.log(`- Genero: ${oneCategory.categoryName}`);
        });
    }
    // Implemented operations
    get categoryName() {
        return this._categoryName;
    }
    set categoryName(value) {
        this._categoryName = value;
    }
}
