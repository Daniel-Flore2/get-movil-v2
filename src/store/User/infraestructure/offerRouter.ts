import express from 'express';
import { registerOfferController, getOfferController, deleteOfferController } from './dependencies';

export const offerRouter = express.Router();

// Ruta para registrar una nueva oferta
offerRouter.post("/create-offer", registerOfferController.register.bind(registerOfferController));

// Ruta para obtener una oferta por su ID
offerRouter.get("/:id", getOfferController.getByPublic.bind(getOfferController));

// Ruta para eliminar una oferta por su ID
offerRouter.delete("/delete/:id", deleteOfferController.delete.bind(deleteOfferController));

// Ruta para obtener todas las ofertas
// offerRouter.get("/all-users", getOffersController.getOffers.bind(getOffersController));
