import { TournamentDTO } from "@/models/dtos/tournaments";
import { query } from "..";
import { UUID } from "@/models/db/base-entity";

const GetTournamentById = async (id: UUID): Promise<TournamentDTO | null> => {
  try {
    const params: any[] = [id];
    const text = `
      SELECT * 
      FROM public.tournaments
      WHERE id = $1
    `;

    const result = await query(text, params);
    if (result.rowCount === 0) return null;
    const item = result.rows[0];
    const dto: TournamentDTO = {
      id: item["id"],
      isDeleted: item["is_deleted"],
      name: item["name"],
      year: item["year"],
      description: item["description"],
      winnerId: item["winner_id"],
    };
    return dto;
  } catch (error: any) {
    console.error(`Error getting Tournament: ${id}`, error);
    return null;
  }
};

const GetAllTournaments = async ({ includeDeleted = false } = {}): Promise<TournamentDTO[] | []> => {
  try {
    const params: any[] = [includeDeleted];
    const text = `
      SELECT * 
      FROM public.tournaments
      WHERE is_deleted = FALSE 
      OR (is_deleted = TRUE AND $1 = TRUE);
    `;
    const result = await query(text, params);

    if (result.rowCount == 0) return [];

    const list: TournamentDTO[] = result.rows.map((item) => {
      return {
        id: item["id"],
        isDeleted: item["is_deleted"],
        name: item["name"],
        year: item["year"],
        description: item["description"],
        winnerId: item["winner_id"],
      };
    });
    return list;
  } catch (error: any) {
    console.error(`Error getting all Tournaments.`, error);
    return [];
  }
};

export { GetTournamentById, GetAllTournaments };
