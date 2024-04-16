import { MysqlUserRepository } from "./mysqlUserRepository";
import { GetUserUseCase } from "../appliaction/getUserUseCase";
import { GetUserController } from "./controllers/getUserController";
import { RegisterUserController } from "./controllers/registerUserController";
import { RegisterUserUseCase } from "../appliaction/registerUserUseCase";
import { MysqlOfferRepository } from './mysqlOfferRepository';
import { RegisterOfferUseCase } from "../appliaction/registerOfferUseCase";
import { GetOffersController } from "./controllers/getOffersController";
import { GetOfferUseCase } from "../appliaction/getOfferUseCase";
import { DeleteOfferUseCase } from "../appliaction/deleteOfferUseCase";
import { RegisterOfferController } from "./controllers/registerOfferController";
import { GetofferController } from "./controllers/getOfferController";
import { DeleteOfferController } from "./controllers/deleteOfferController";
import { GetoffersUseCase } from "../appliaction/getOffersUseCase";
import { GetUsersUseCase } from "../appliaction/getUsersUseCase";

// Repositorios y casos de uso para usuarios
const mysqlUserRepository = new MysqlUserRepository();
const getUsersUseCase = new GetUserUseCase(mysqlUserRepository);
export const getUserController = new GetUserController(getUsersUseCase);
const registerUserUseCase = new RegisterUserUseCase(mysqlUserRepository);
const registerUserController = new RegisterUserController(registerUserUseCase);

// Repositorios y casos de uso para ofertas
const mysqlOfferRepository = new MysqlOfferRepository();
const registerOfferUseCase = new RegisterOfferUseCase(mysqlOfferRepository);
const registerOfferController = new RegisterOfferController(registerOfferUseCase);
const getOfferUseCase = new GetOfferUseCase(mysqlOfferRepository);
const getOfferController = new GetofferController(getOfferUseCase);
const getAllOffers = new GetOfferUseCase(mysqlOfferRepository);
//const getOffersUseCase = new GetoffersUseCase(mysqlOfferRepository); // Crear instancia de GetoffersUseCase
//const getAllOffersController = new GetOffersController(getOffersUseCase);
const deleteOfferUseCase = new DeleteOfferUseCase(mysqlOfferRepository);
const deleteOfferController = new DeleteOfferController(deleteOfferUseCase);

// Exportar controladores necesarios
export {
  registerOfferController,
  getOfferController,
  deleteOfferController
};
