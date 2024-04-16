import { Request, Response } from "express";
import { DeleteOfferUseCase } from "../../appliaction/deleteOfferUseCase";

export class DeleteOfferController {
    constructor(private readonly deleteOfferUseCase: DeleteOfferUseCase) {}

    async delete(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const offerId = parseInt(id);

            const deleted = await this.deleteOfferUseCase.run(offerId);

            if (deleted) {
                return res.status(200).send({
                    status: "success",
                    message: "Offer deleted successfully"
                });
            } else {
                return res.status(404).send({
                    status: "error",
                    message: "Offer not found"
                });
            }
        } catch (error) {
            return res.status(500).send({
                status: "error",
                message: "An error occurred while deleting the offer"
            });
        }
    }
}
