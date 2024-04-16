import { Request, Response } from "express";
import { UpdateOfferByIdUseCase } from "../../appliaction/updateOfferByIdUseCase";
import { Offer } from "../../domain/offer";

export class UpdateOfferController {
    constructor(private readonly updateOfferByIdUseCase: UpdateOfferByIdUseCase) {}

    async updateOffer(req: Request, res: Response) {
        try {
            const id = parseInt(req.params.id); // Convertir el id a número
            const { title, description, price, discount, availability } = req.body;

            const updatedOffer = new Offer(id, title, description, price, availability, discount);

            const result = await this.updateOfferByIdUseCase.execute(id, updatedOffer);

            if (result) {
                return res.status(200).json({
                    status: "success",
                    data: {
                        message: "Offer updated successfully",
                        offer: result,
                    },
                });
            } else {
                return res.status(404).json({
                    status: "error",
                    message: "Offer not found",
                });
            }
        } catch (error) {
            console.error("Error updating offer:", error);
            return res.status(500).json({
                status: "error",
                message: "An error occurred while updating the offer",
            });
        }
    }
}
