import express from 'express';
import { getUserController, registerUserUseCase } from './dependencies'; // Asegúrate de tener el controlador RegisterUserController importado desde tus dependencias
import { GetUserUseCase } from '../appliaction/getUserUseCase';
import { GetUserController } from './controllers/getUserController';
import { MysqlUserRepository } from './mysqlUserRepository';
import { RegisterUserController } from './controllers/registerUserController';

export const userRouter = express.Router();
export const registerUserController = new RegisterUserController(registerUserUseCase);
const userRepository = new MysqlUserRepository();

const getUsersUseCase = new GetUserUseCase(userRepository);
const getUsersController = new GetUserController(getUsersUseCase);


// Ruta para obtener un usuario por su ID
userRouter.get("/:id", getUserController.getByPublic.bind(getUserController));

// Ruta para registrar un nuevo usuario
userRouter.post("/create-user", registerUserController.register.bind(registerUserController));

// Ruta para obtener todos los usuarios
//userRouter.get("/all-users", getUserController.getAll.bind(getUsersController));



