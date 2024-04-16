import { v4 as uuid } from "uuid";

export class Offer {
    public id: number;
    public title: string;
    public description: string;
    public price: number;
    public discount: string;
    public availability: string;
   

    constructor(id: number, title: string, description: string, price: number, availability: string, discount: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.availability = availability;
        this.discount = discount;
        
    }

    
}

export class UpdateOffert{

    public id: number;
    public title: string;
    public description: string;
    public price: number;
    public discount: string;
    public availability: string;
    

    constructor(id: number, title: string, description: string, price: number, availability: string, discount: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.availability = availability;
        this.discount = discount;
    }

}

export class DeleteOffert{

    public id: number;
    public title: string;
    public description: string;
    public price: number;
    public discount: string;
    public availability: string;
    

    constructor(id: number, title: string, description: string, price: number, availability: string, discount: string) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.price = price;
        this.availability = availability;
        this.discount = discount;
    }

}

