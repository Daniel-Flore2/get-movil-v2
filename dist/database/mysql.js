"use strict";
// import { Pool, QueryResult } from "pg";
// import { Signale } from "signale";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
// const signale = new Signale();
// const config = {
//   user: "fl0user",
//   host: "ep-billowing-bird-a5yp3y4v.us-east-2.aws.neon.fl0.io",
//   database: "movil",
//   password: "R5ZGa8tKdpTw",
//   port: 5432,
//   ssl: {
//     rejectUnauthorized: false, // Agrega esta línea para aceptar certificados autofirmados
//     require: true
//   }
// };
// const pool = new Pool(config);
// export async function query(sql: string, params?: any[]): Promise<QueryResult> {
//   try {
//     const conn = await pool.connect();
//     signale.success("Conexión exitosa a la BD");
//     const result = await conn.query(sql, params);
//     conn.release();
//     return result;
//   } catch (error) {
//     signale.error(error);
//     throw error; // Cambio aquí
//   }
// }
const promise_1 = __importDefault(require("mysql2/promise"));
const signale_1 = require("signale");
const signale = new signale_1.Signale();
const config = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    database: 'movil',
    password: '',
    waitForConnections: true,
    connectionLimit: 10,
};
// Crear el pool de conexiones
const pool = promise_1.default.createPool(config);
function query(sql, params) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const conn = yield pool.getConnection();
            signale.success("Conexión exitosa a la BD");
            const result = yield conn.execute(sql, params);
            conn.release();
            return result;
        }
        catch (error) {
            console.log(process.env.DB_HOST);
            signale.error(error);
            return null;
        }
    });
}
exports.query = query;
