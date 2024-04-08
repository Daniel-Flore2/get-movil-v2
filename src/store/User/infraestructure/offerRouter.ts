import { RegisterOfferController } from './controllers/registerOfferController';
import { RegisterOfferUseCase } from '../appliaction/registerOfferUseCase';
import { MysqlOfferRepository } from './mysqlOfferRepository';
import express from 'express';
import { GetofferController } from './controllers/getOfferController';

export const offerRouter = express.Router();

const offerRepository = new MysqlOfferRepository();
const registerOfferUseCase = new RegisterOfferUseCase(offerRepository);
const registerOfferController = new RegisterOfferController(registerOfferUseCase);


// Ruta para registrar una nueva oferta
offerRouter.post("/create-offer", registerOfferController.register.bind(registerOfferController));
