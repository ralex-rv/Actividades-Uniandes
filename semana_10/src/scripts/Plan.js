/* Generated with GenMyModel */
/*
/// <reference path="StreamPlatform.ts" />
*/
import { StreamPlatform } from "./StreamPlatform.js";
export class Plan {
    // Implemented attributes	
    // Operations
    constructor(cost = 0, planName = '', description = '', streamPlatform = new StreamPlatform()) {
        this.cost = cost;
        this.planName = planName;
        this.description = description;
        this.streamPlatform = streamPlatform;
    }
}
