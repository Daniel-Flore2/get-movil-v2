import express from 'express';
import { getUserController, registerUserController } from './dependencies'; // Asegúrate de tener el controlador RegisterUserController importado desde tus dependencias

export const userRouter = express.Router();

// Ruta para obtener un usuario por su ID
userRouter.get("/:id", getUserController.getByPublic.bind(getUserController));

// Ruta para registrar un nuevo usuario
userRouter.post("/create-user", registerUserController.register.bind(registerUserController));
