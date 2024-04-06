import { MysqlUserRepository } from "./mysqlUserRepository";
import { GetUserUseCase } from "../appliaction/getUsersUseCase";
import { GetUserController } from "./controllers/getUserController";
import { RegisterUserController } from "./controllers/registerUserController";
import { RegisterUserUseCase } from "../appliaction/registerUserUseCase";


export const mysqlUserRepository = new MysqlUserRepository();

export const getUsersUseCase = new GetUserUseCase(mysqlUserRepository);
export const getUserController = new GetUserController(getUsersUseCase);
export const registerUserUseCase = new RegisterUserUseCase(mysqlUserRepository);

// Crear una instancia de RegisterUserController que utiliza el caso de uso para manejar las solicitudes de registro de usuarios
export const registerUserController = new RegisterUserController(registerUserUseCase);