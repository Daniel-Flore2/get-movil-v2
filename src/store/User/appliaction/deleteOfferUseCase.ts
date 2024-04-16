import { offerRepository } from "../domain/offerRepository";

export class DeleteOfferUseCase {
    constructor(private readonly offerRepository: offerRepository) {}

    async run(id: number): Promise<boolean> {
        try {
            const offer = await this.offerRepository.getOffer(id);

            if (!offer) {
                throw new Error("Offer not found");
            }

            await this.offerRepository.deleteOffer(id);
            return true;
        } catch (error) {
            console.error("Error deleting offer:", error);
            throw new Error("Error deleting offer");
        }
    }
}
