import { MysqlUserRepository } from "./mysqlUserRepository";
import { GetUserUseCase } from "../appliaction/getUserUseCase";
import { GetUserController } from "./controllers/getUserController";
import { RegisterUserController } from "./controllers/registerUserController";
import { RegisterUserUseCase } from "../appliaction/registerUserUseCase";
import { RegisterOfferController } from './controllers/registerOfferController';
import { RegisterOfferUseCase } from '../appliaction/registerOfferUseCase';
import { MysqlOfferRepository } from './mysqlOfferRepository';
import { offerRouter } from "./offerRouter";
import { GetOfferUseCase } from "../appliaction/getOfferUseCase";
import { GetofferController } from "./controllers/getOfferController";

export const mysqlUserRepository = new MysqlUserRepository();

export const getUsersUseCase = new GetUserUseCase(mysqlUserRepository);
export const getUserController = new GetUserController(getUsersUseCase);
export const registerUserUseCase = new RegisterUserUseCase(mysqlUserRepository);
import { RegisterOfferController } from './controllers/registerOfferController';
import { RegisterOfferUseCase } from '../application/registerOfferUseCase';
import { MysqlOfferRepository } from './mysqlOfferRepository';
import { GetOfferController } from './controllers/getOfferController';
import { GetOfferUseCase } from '../application/getOfferUseCase';
import { DeleteOfferController } from './controllers/deleteOfferController';
import { DeleteOfferUseCase } from '../application/deleteOfferUseCase';

const offerRepository = new MysqlOfferRepository();

export const registerOfferUseCase = new RegisterOfferUseCase(offerRepository);
export const registerOfferController = new RegisterOfferController(registerOfferUseCase);

export const getOfferUseCase = new GetOfferUseCase(offerRepository);
export const getOfferController = new GetOfferController(getOfferUseCase);

export const deleteOfferUseCase = new DeleteOfferUseCase(offerRepository);
export const deleteOfferController = new DeleteOfferController(deleteOfferUseCase);




// Crear una instancia de RegisterUserController que utiliza el caso de uso para manejar las solicitudes de registro de usuarios
export const registerUserController = new RegisterUserController(registerUserUseCase);




const offerRepository = new MysqlOfferRepository();
const registerOfferUseCase = new RegisterOfferUseCase(offerRepository);
const registerOfferController = new RegisterOfferController(registerOfferUseCase);



