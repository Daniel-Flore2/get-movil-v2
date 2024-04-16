import { Request, Response } from "express";
import { GetoffersUseCase } from "../../appliaction/getOffersUseCase";
import { Offer } from "../../domain/offer";

export class GetOffersController {
    constructor(readonly getOffersUseCase: GetoffersUseCase) {}

    async getOffers(req: Request, res: Response) {
        try {
            const getAll = await this.getOffersUseCase.run();

            if (getAll) {
                return res.status(200).send({
                    status: "success",
                    data: {
                        list: getAll
                    }
                });
            } else {
                return res.status(204).send({
                    status: "ok",
                    message: "Content not found"
                });
            }
        } catch (error) {
            console.error("Error in getOffersController:", error); // Agrega este console.log para imprimir el error
            return res.status(500).send({
                status: "error",
                message: "An error occurred while listing the offers."
            });
        }
    }
}
