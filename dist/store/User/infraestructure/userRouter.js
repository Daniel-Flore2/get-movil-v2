"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const dependencies_1 = require("./dependencies");
exports.userRouter = express_1.default.Router();
exports.userRouter.get("/:id", dependencies_1.getUserController.getByPublic.bind(dependencies_1.getUserController));
