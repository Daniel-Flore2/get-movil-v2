import {Offer} from "./offer";

export interface offerRepository {
    [x: string]: any;
    getOffer(id:number):Promise<Offer| null>;

}