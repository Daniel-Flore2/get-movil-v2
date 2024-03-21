"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MysqlUserRepository = void 0;
const mysql_1 = require("../../../database/mysql");
const user_1 = require("../domain/user");
class MysqlUserRepository {
    getUser(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const sql = "SELECT * FROM user WHERE id = ?";
                const [rows] = yield (0, mysql_1.query)(sql, [id]);
                // Si no hay registros que coincidan, regresamos null indicando que el libro no fue encontrado
                if (!Array.isArray(rows) || rows.length === 0) {
                    return null;
                }
                const row = rows[0]; // Como estamos buscando por ID, sólo debe haber una coincidencia
                const user = new user_1.User(row.id, row.name, row.lastname, row.phone, row.email, row.birthday);
                return user;
            }
            catch (error) {
                console.error('Error al obtener el user:', error);
                return null;
            }
        });
    }
}
exports.MysqlUserRepository = MysqlUserRepository;
