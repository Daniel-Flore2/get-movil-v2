import { query } from "../../../database/mysql";
import { Offer, UpdateOffert } from "../domain/offer";
import { offerRepository } from "../domain/offerRepository";

export class MysqlOfferRepository implements offerRepository {
    registeroffer(offer: Offer): Promise<Offer | null> {
        throw new Error("Method not implemented.");
    }
    getoffer(id: number): Promise<Offer | null> {
        throw new Error("Method not implemented.");
    }
    [x: string]: any;
    updateOfferById(product: UpdateOffert): Promise<boolean | UpdateOffert | null> {
        throw new Error("Method not implemented.");
    }
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

    async getOffers(): Promise<Offer[] | null> {
        try {
            const sql = "SELECT * FROM offer";
            const [rows]: any = await query(sql);

            if (!Array.isArray(rows) || rows.length === 0) {
                return null; // Si no se encontró ninguna oferta, retornar null
            }

            const offers = rows.map((row: any) => {
                return new Offer(
                    row.id,
                    row.title,
                    row.description,
                    row.price,
                    row.availability,
                    row.discount
                );
            });

            return offers;

        } catch (error) {
            console.error('Error al obtener las ofertas:', error);
            throw new Error('Error al obtener las ofertas');
        }
    }

    async deleteOffer(id: number): Promise<Offer | null> {
        try {
            const sql = "DELETE FROM offer WHERE id = ?";
            const result: any = await query(sql, [id]);
    
            // Verificar si se eliminó correctamente (rowCount es 1 si se eliminó, de lo contrario es 0)
            if (result && result.affectedRows && result.affectedRows === 1) {
                // Se eliminó correctamente, devolver null ya que la oferta ya no existe
                return null;
            }
    
            // La oferta no existía, devolver null
            return null;
    
        } catch (error) {
            console.error('Error al eliminar la oferta:', error);
            throw new Error('Error al eliminar la oferta');
        }
    }
    

}