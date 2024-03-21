import express from 'express';
import { getUserController } from './dependencies';


export const userRouter = express.Router();


userRouter.get("/:id", getUserController.getByPublic.bind(getUserController))
