import express from 'express';
import { registerOfferController, getOfferController, deleteOfferController, getOffersController } from './dependencies';

export const offerRouter = express.Router();

// Ruta para obtener todas las ofertas
offerRouter.get("/all-offers", getOffersController.getOffers.bind(getOffersController));

// Ruta para registrar una nueva oferta
offerRouter.post("/create-offer", registerOfferController.register.bind(registerOfferController));

// Ruta para obtener una oferta por su ID
offerRouter.get("/:id", getOfferController.getByPublic.bind(getOfferController));

// Ruta para eliminar una oferta por su ID
offerRouter.delete("/delete/:id", deleteOfferController.delete.bind(deleteOfferController));


