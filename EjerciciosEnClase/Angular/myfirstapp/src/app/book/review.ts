import { identifierName } from "@angular/compiler";

export class Review {
    id: Number;
    source: String;
    name: String;
    description: String;

    constructor(
        id: Number,
        source: String,
        name: String,
        description: String
    ) {
        this.id = id;
        this.source = source;
        this.name = name;
        this.description = description;
    }
}
