"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const signale_1 = require("signale");
// import * as admin from "firebase-admin";
const express_fileupload_1 = __importDefault(require("express-fileupload")); // Importa express-fileupload
const dotenv_1 = __importDefault(require("dotenv"));
const userRouter_1 = require("../src/store/User/infraestructure/userRouter");
dotenv_1.default.config();
// Inicializa la aplicación Express
const app = (0, express_1.default)();
const signale = new signale_1.Signale();
// Configura middleware
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Configura express-fileupload
app.use((0, express_fileupload_1.default)()); // Agrega esta línea para configurar express-fileupload
// Configura las rutas
app.use('/api/v1/user', userRouter_1.userRouter);
// Configura el puerto
const port = 3006;
app.listen(port, () => {
    console.log(`Corriendo en el puerto ${port}`);
});
