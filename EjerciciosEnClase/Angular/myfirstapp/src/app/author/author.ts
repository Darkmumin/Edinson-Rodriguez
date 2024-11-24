export class Author {
    id: Number;
    name: String;
    bithDate: any;
    image: String;
    description: String;
    constructor (
        id: Number,
        name: String,
        bithDate: any,
        image: String,
        description: String,
    ) {
        this.id = id;
        this.name = name;
        this.image = image;
        this.bithDate = bithDate;
        this.description = description;
    }
} 
