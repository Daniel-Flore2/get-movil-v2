"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserController = exports.getUsersUseCase = exports.mysqlUserRepository = void 0;
const mysqlUserRepository_1 = require("./mysqlUserRepository");
const getUsersUseCase_1 = require("../appliaction/getUsersUseCase");
const getUserController_1 = require("./controllers/getUserController");
exports.mysqlUserRepository = new mysqlUserRepository_1.MysqlUserRepository();
exports.getUsersUseCase = new getUsersUseCase_1.GetUserUseCase(exports.mysqlUserRepository);
exports.getUserController = new getUserController_1.GetUserController(exports.getUsersUseCase);
