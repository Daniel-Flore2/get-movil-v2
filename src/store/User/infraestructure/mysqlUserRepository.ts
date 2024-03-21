import { query } from "../../../database/mysql";
import { User } from "../domain/user";
import { userRepository } from "../domain/userRepository";


export class MysqlUserRepository implements userRepository{
    async getUser(id: number): Promise<User | null> {
        try {
            const sql = "SELECT * FROM user WHERE id = ?";
            const [rows]: any = await query(sql, [id]);

            // Si no hay registros que coincidan, regresamos null indicando que el libro no fue encontrado
            if (!Array.isArray(rows) || rows.length === 0) {
                return null;
            }

            const row = rows[0]; // Como estamos buscando por ID, sólo debe haber una coincidencia

            const user = new User(
                row.id,
                row.name,
                row.lastname,
                row.phone,
                row.email,
                row.birthday,
            );

            return user;

        } catch (error) {
            console.error('Error al obtener el user:', error);
            return null;
        }
    }

}