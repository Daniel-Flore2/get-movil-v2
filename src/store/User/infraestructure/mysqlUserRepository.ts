import { query } from "../../../database/mysql";
import { User } from "../domain/user";
import { UserRepository } from "../domain/userRepository";

export class MysqlUserRepository implements UserRepository {
    registeruser(user: User): Promise<User | null> {
        throw new Error("Method not implemented.");
    }
    async getUser(id: number): Promise<User | null> {
        try {
            const sql = "SELECT * FROM user WHERE id = ?";
            const [rows]: any = await query(sql, [id]);

            if (!Array.isArray(rows) || rows.length === 0) {
                return null; // Si no se encontró ningún usuario, retornar null
            }

            const row = rows[0];

            const user = new User(
                row.id,
                row.name,
                row.lastname,
                row.phone,
                row.email,
                row.birthday,
                row.password  // Agregar la contraseña si es necesaria
            );

            return user;

        } catch (error) {
            console.error('Error al obtener el usuario:', error);
            throw new Error('Error al obtener el usuario'); // Lanzar un error para manejarlo en niveles superiores si es necesario
        }
    }

    // Agregar método para registrar usuario si es necesario
    async registerUser(user: User): Promise<User | null> {
        try {
            const sql = "INSERT INTO user (id, name, lastname, phone, email, birthday, password) VALUES (?, ?, ?, ?, ?, ?, ?)";
            await query(sql, [user.id, user.name, user.lastname, user.phone, user.email, user.birthday, user.password]);

            return user; // Retornar el usuario registrado

        } catch (error) {
            console.error('Error al registrar el usuario:', error);
            throw new Error('Error al registrar el usuario');
        }
    }
    async getUsers(): Promise<User[] | null> {
        try {
            const sql = "SELECT * FROM user";
            const [rows]: any = await query(sql);

            if (!Array.isArray(rows) || rows.length === 0) {
                return null; // Si no se encontró ningún usuario, retornar null
            }

            const users = rows.map((row: any) => {
                return new User(
                    row.id,
                    row.name,
                    row.lastname,
                    row.phone,
                    row.email,
                    row.birthday,
                    row.password
                );
            });

            return users;

        } catch (error) {
            console.error('Error al obtener los usuarios:', error);
            throw new Error('Error al obtener los usuarios');
        }
    }
}
