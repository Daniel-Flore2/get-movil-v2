import { PostgresUserRepository } from "./mysqlUserRepository";
import { GetUserUseCase } from "../appliaction/getUsersUseCase";
import { GetUserController } from "./controllers/getUserController";

export const mysqlUserRepository = new PostgresUserRepository();

export const getUsersUseCase = new GetUserUseCase(mysqlUserRepository);
export const getUserController = new GetUserController(getUsersUseCase);