import { query } from "../../../database/mysql";
import { Offer } from "../domain/offer";
import { offerRepository } from "../domain/offerRepository";

export class MysqlOfferRepository implements offerRepository {
    async getOffer(id: number): Promise<Offer | null> {
        try {
            const sql = "SELECT * FROM offer WHERE id = ?";
            const [rows]: any = await query(sql, [id]);

            if (!Array.isArray(rows) || rows.length === 0) {
                return null; // Si no se encontró ninguna oferta, retornar null
            }

            const row = rows[0];

            const offer = new Offer(
                row.id,
                row.title,
                row.description,
                row.price,
                row.availability,
                row.discount,
              
            );

            return offer;

        } catch (error) {
            console.error('Error al obtener la oferta:', error);
            throw new Error('Error al obtener la oferta'); // Lanzar un error para manejarlo en niveles superiores si es necesario
        }
    }

    async registerOffer(offer: Offer): Promise<Offer | null> {
        try {
            const sql = "INSERT INTO offer (id, title, description, price, availability,discount) VALUES (?, ?, ?, ?, ?, ?)";
            await query(sql, [
                offer.id,
                offer.title,
                offer.description,
                offer.price,
                offer.availability,
                offer.discount,
                
            ]);

            return offer; // Retornar la oferta registrada

        } catch (error) {
            console.error('Error al registrar la oferta:', error);
            throw new Error('Error al registrar la oferta');
        }
    }
}
