import { RegisterOfferController } from './controllers/registerOfferController';
import { RegisterOfferUseCase } from '../appliaction/registerOfferUseCase';
import { MysqlOfferRepository } from './mysqlOfferRepository';
import express from 'express';
import { GetofferController } from './controllers/getOfferController';
import { GetOfferUseCase } from '../appliaction/getOfferUseCase';

const offerRepository = new MysqlOfferRepository();
const getOfferUseCase = new GetOfferUseCase(offerRepository);
const getOfferController = new GetofferController(getOfferUseCase);

export const offerRouter = express.Router();


const registerOfferUseCase = new RegisterOfferUseCase(offerRepository);
const registerOfferController = new RegisterOfferController(registerOfferUseCase);


// Ruta para registrar una nueva oferta
offerRouter.post("/create-offer", registerOfferController.register.bind(registerOfferController));



offerRouter.get("/:id", getOfferController.getByPublic.bind(getOfferController));
