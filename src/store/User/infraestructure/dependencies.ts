import { MysqlUserRepository } from "./mysqlUserRepository";
import { GetUserUseCase } from "../appliaction/getUsersUseCase";
import { GetUserController } from "./controllers/getUserController";
import { RegisterUserController } from "./controllers/registerUserController";
import { RegisterUserUseCase } from "../appliaction/registerUserUseCase";
import { RegisterOfferController } from './controllers/registerOfferController';
import { RegisterOfferUseCase } from '../appliaction/registerOfferUseCase';
import { MysqlOfferRepository } from './mysqlOfferRepository';
import { offerRouter } from "./offerRouter";
import { GetOfferUseCase } from "../appliaction/getOfferUseCase";

export const mysqlUserRepository = new MysqlUserRepository();

export const getUsersUseCase = new GetUserUseCase(mysqlUserRepository);
export const getUserController = new GetUserController(getUsersUseCase);
export const registerUserUseCase = new RegisterUserUseCase(mysqlUserRepository);


// Crear una instancia de RegisterUserController que utiliza el caso de uso para manejar las solicitudes de registro de usuarios
export const registerUserController = new RegisterUserController(registerUserUseCase);





const offerRepository = new MysqlOfferRepository();
const registerOfferUseCase = new RegisterOfferUseCase(offerRepository);
const registerOfferController = new RegisterOfferController(registerOfferUseCase);



