import { Tag } from "src/tag";


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
}
