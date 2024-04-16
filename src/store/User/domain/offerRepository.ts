import { Offer } from "./offer"

export interface offerRepository{

    registerOffer(offer:Offer):Promise<Offer| null>

    getOffer(id:number):Promise<Offer| null>;

    deleteOffer(id:number):Promise<Offer| null>

    getOffers():Promise<Offer[] | null>

    
}