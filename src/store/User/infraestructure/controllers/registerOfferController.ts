import { Request, Response } from "express";
import { Offer } from "../../domain/offer";
import { RegisterOfferUseCase } from "../../appliaction/registerOfferUseCase";

export class RegisterOfferController {
    RegisterOfferUseCase!: RegisterOfferUseCase;

    constructor(readonly registerOfferUseCase: RegisterOfferUseCase) {
        this.registerOfferUseCase = registerOfferUseCase;
    }

    async register(req: Request, res: Response) {
        try {
            const { id, title, description, price,discount , availability} = req.body;

            const offer: Offer = {
                id: id,
                title: title,
                description: description,
                price: price,
                availability: availability,
                discount: discount,
            };

            const newOffer = await this.registerOfferUseCase.run(offer);

            if (newOffer) {
                return res.status(201).send({
                    status: "success",
                    data: {
                        message: "Offer registered successfully",
                        offer: newOffer
                    }
                });
            } else {
                return res.status(500).send({
                    status: "error",
                    message: "An error occurred while registering the offer."
                });
            }
        } catch (error) {
            return res.status(500).send({
                status: "error",
                message: "An error occurred while registering the offer."
            });
        }
    }
}
