/* Generated with GenMyModel */
/*
/// <reference path="SeriesTV.ts" />
*/
import { SeriesTV } from "./SeriesTV.js";
export class Episode {
    // Implemented attributes	
    // Operations
    constructor(episodeName = '', summary = '', duration = 0, serieTV = new SeriesTV()) {
        this.episodeName = episodeName;
        this.summary = summary;
        this.duration = duration;
        this.serieTV = serieTV;
    }
}
