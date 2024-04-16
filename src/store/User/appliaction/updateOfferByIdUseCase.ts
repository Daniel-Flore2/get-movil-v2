import { Offer } from "../domain/offer";
import { offerRepository } from "../domain/offerRepository";

export class UpdateOfferByIdUseCase {
    constructor(readonly offerRepository: offerRepository) {}

    async execute(id: number, updatedOfferData: Offer): Promise<Offer | null> {
        try {
            // Obtener la oferta actual por ID
            const existingOffer = await this.offerRepository.getOfferById(id, updatedOffer);

            if (!existingOffer) {
                throw new Error("Offer not found");
            }

            // Actualizar los datos de la oferta existente con los datos proporcionados
            const updatedOffer = {
                id: id,
                title: updatedOfferData.title || existingOffer.title,
                description: updatedOfferData.description || existingOffer.description,
                price: updatedOfferData.price || existingOffer.price,
                availability: updatedOfferData.availability || existingOffer.availability,
                discount: updatedOfferData.discount || existingOffer.discount,
            };

            // Verificar que al menos uno de los campos se haya proporcionado para la actualización
            if (
                updatedOffer.title !== existingOffer.title ||
                updatedOffer.description !== existingOffer.description ||
                updatedOffer.price !== existingOffer.price ||
                updatedOffer.availability !== existingOffer.availability ||
                updatedOffer.discount !== existingOffer.discount
            ) {
                // Actualizar la oferta en el repositorio
                return await this.offerRepository.updateOfferById(id);
            } else {
                throw new Error("No fields provided for update");
            }
        } catch (error) {
            console.error("Error updating offer:", error);
            return null;
        }
    }
}
