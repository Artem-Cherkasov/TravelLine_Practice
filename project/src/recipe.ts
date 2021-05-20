import { Tag } from "src/tag";
import { Ingridient } from "src/ingridient";
import { Step } from "src/step"


export interface Recipe {
    id: number;
    image: string;
    tags: Tag[];   
    fav: number;
    like: number;
    name: string;
    description: string;
    time: string;
    person: string;
    ingridient: Ingridient[];
    step: Step[]
}
