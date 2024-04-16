import { RegisterOfferController } from './controllers/registerOfferController';
import { RegisterOfferUseCase } from '../appliaction/registerOfferUseCase';
import { MysqlOfferRepository } from './mysqlOfferRepository';
import express from 'express';
import { GetofferController } from './controllers/getOfferController';
import { GetOfferUseCase } from '../appliaction/getOfferUseCase';
import { DeleteOfferController } from './controllers/deleteOfferController';
import { DeleteOfferUseCase } from '../appliaction/deleteOfferUseCase';


const offerRepository = new MysqlOfferRepository();
const getOfferUseCase = new GetOfferUseCase(offerRepository);
const getOfferController = new GetofferController(getOfferUseCase);

export const offerRouter = express.Router();


const registerOfferUseCase = new RegisterOfferUseCase(offerRepository);
const registerOfferController = new RegisterOfferController(registerOfferUseCase);

// Controlador y caso de uso para eliminar una oferta
const deleteOfferUseCase = new DeleteOfferUseCase(offerRepository);
const deleteOfferController = new DeleteOfferController(deleteOfferUseCase);


// Ruta para registrar una nueva oferta
offerRouter.post("/create-offer", registerOfferController.register.bind(registerOfferController));



offerRouter.get("/:id", getOfferController.getByPublic.bind(getOfferController));


// // Ruta para obtener todas las ofertas
// offerRouter.get("/all-offers", getOfferController.getAll.bind(getOfferController));

// Ruta para eliminar una oferta por su ID
// offerRouter.delete("/delete/:id", deleteOfferController.delete.bind(deleteOfferController));