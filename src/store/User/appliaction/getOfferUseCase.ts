import { Offer } from "../domain/offer";
import { offerRepository } from "../domain/offerRepository";

export class GetOfferUseCase {
    private readonly offerRepository: offerRepository;

    constructor(offerRepository: offerRepository) {
        this.offerRepository = offerRepository;
    }

    async getOffer(id: number): Promise<Offer | null> {
        try {
            return await this.offerRepository.getOffer(id);
        } catch (error) {
            console.error("Error getting Offer:", error);
            return null;
        }
    }
}