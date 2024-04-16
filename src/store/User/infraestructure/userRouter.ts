import express from 'express';
import { getUserController, registerUserUseCase } from './dependencies'; // Asegúrate de tener el controlador RegisterUserController importado desde tus dependencias
import { GetUserUseCase } from '../appliaction/getUserUseCase';
import { GetUsersController } from './controllers/getUsersController';
import { MysqlUserRepository } from './mysqlUserRepository';
import { RegisterUserController } from './controllers/registerUserController';
import { GetUsersUseCase } from '../appliaction/getUsersUseCase';

export const userRouter = express.Router();
export const registerUserController = new RegisterUserController(registerUserUseCase);
const userRepository = new MysqlUserRepository();

const getUsersUseCase = new GetUsersUseCase(userRepository);
const getUsersController = new GetUsersController(getUsersUseCase);


userRouter.get("/all-users", getUsersController.getUsers.bind(getUsersController));
// Ruta para obtener un usuario por su ID
userRouter.get("/:id", getUserController.getByPublic.bind(getUserController));

// Ruta para registrar un nuevo usuario
userRouter.post("/create-user", registerUserController.register.bind(registerUserController));

// Ruta para obtener todos los usuarios
// userRouter.get("/all-users", GetUsersController.getUsers.bind(GetUsersController));
// userRouter.get("/all-users", getUserController.getAll.bind(getUsersController));



