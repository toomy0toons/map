import { Location } from './location';

export class Mission{
    constructor(public title: string, 
    public description: string,
    public location : Location,
    public imagePath : string){
    }
}