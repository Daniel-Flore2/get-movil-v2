import { Request,Response } from "express";
import { GetOfferUseCase } from "../../appliaction/getOfferUseCase";

export class GetofferController {
    getOfferUseCase: GetOfferUseCase;

    constructor(readonly getoffersUseCase: GetOfferUseCase) {
        this.getOfferUseCase = getoffersUseCase;
    }

    async getByPublic(req: Request, res: Response) {
        try {
            let { id } = req.params;
            let offerId = parseInt(id, 10); // Convertir el id a un número
    
            let offer = await this.getOfferUseCase.getOffer(offerId);
    
            if (offer !== null && offer !== undefined) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        message: offer
                    }
                });
            } else {
                return res.status(404).send({
                    status: "error",
                    message: "offer not found."
                });
            }
        } catch (error) {
            if (error instanceof Error) {
                if (error.message.startsWith('[')) {
                    return res.status(400).send({
                        status: "error",
                        message: "Validation failed",
                        errors: JSON.parse(error.message)
                    });
                }
            }
            return res.status(500).send({
                status: "error",
                message: "An error occurred while fetching the offer."
            });
        }
    }
    
    
    
}

