import { Offer } from "../domain/offer";
import { offerRepository } from "../domain/offerRepository";


export class GetoffersUseCase{
    constructor(readonly offerRepository: offerRepository){}

    async run():Promise<Offer[] | null>{
        try {
            const getAll = await this.offerRepository.getOffers();
            return getAll;
            
        } catch (error) {
            return null;
        }
    }
}