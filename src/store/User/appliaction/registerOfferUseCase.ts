import { Offer } from "../domain/offer";
import { offerRepository } from "../domain/offerRepository";
import { v4 as uuid } from "uuid";

export class RegisterOfferUseCase {
    constructor(readonly offerRepository: offerRepository) {}

    async run(offer: Offer): Promise<Offer | null> {
        try {
            const newOffer = {
                id: offer.id,
                title: offer.title,
                description: offer.description,
                price: offer.price,
                availability: offer.availability,
                discount: offer.discount,

            };

            return await this.offerRepository.registerOffer(newOffer);
        } catch (error) {
            return null;
        }
    }
}
