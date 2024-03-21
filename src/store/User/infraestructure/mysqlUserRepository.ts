import { query } from "../../../database/mysql"; // Ajusta la importación para usar PostgreSQL
import { User } from "../domain/user";
import { userRepository } from "../domain/userRepository";

export class PostgresUserRepository implements userRepository {
    async getUser(id: number): Promise<User | null> {
        try {
            const sql = "SELECT * FROM \"user\" WHERE id = $1"; // Usamos $1 para el parámetro de id
            const result = await query(sql, [id]);

            // Si no hay registros que coincidan, regresamos null indicando que el usuario no fue encontrado
            if (result.rows.length === 0) {
                return null;
            }

            const row = result.rows[0]; // Como estamos buscando por ID, sólo debe haber una coincidencia

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
            console.error('Error al obtener el usuario:', error);
            return null;
        }
    }

}
