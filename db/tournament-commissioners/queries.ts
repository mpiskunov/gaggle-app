import { TournamentCommissionerDTO } from "@/models/dtos/tournament-commissioners";
import { query } from "..";
import { UUID } from "@/models/db/base-entity";

const GetTournamentCommissionerById = async (id: UUID): Promise<TournamentCommissionerDTO | null> => {
  try {
    const params: any[] = [id];
    const text = `
      SELECT * 
      FROM public.tournament_commissioners
      WHERE id = $1
    `;

    const result = await query(text, params);
    if (result.rowCount === 0) return null;
    const item = result.rows[0];
    const dto: TournamentCommissionerDTO = {
      id: item["id"],
      userId: item["user_id"],
      isDeleted: item["is_deleted"],
      tournamentId: item["tournament_id"],
    };
    return dto;
  } catch (error: any) {
    console.error(`Error getting TournamentCommissioner: ${id}`, error);
    return null;
  }
};

const GetAllTournamentCommissioners = async ({ includeDeleted = false } = {}): Promise<TournamentCommissionerDTO[] | []> => {
  try {
    const params: any[] = [includeDeleted];
    const text = `
      SELECT * 
      FROM public.tournament_commissioners
      WHERE is_deleted = FALSE 
      OR (is_deleted = TRUE AND $1 = TRUE);
    `;
    const result = await query(text, params);

    if (result.rowCount == 0) return [];

    const list: TournamentCommissionerDTO[] = result.rows.map((item) => {
      return {
        id: item["id"],
        userId: item["user_id"],
        isDeleted: item["is_deleted"],
        tournamentId: item["tournament_id"],
      };
    });
    return list;
  } catch (error: any) {
    console.error(`Error getting all TournamentCommissioners.`, error);
    return [];
  }
};

export { GetTournamentCommissionerById, GetAllTournamentCommissioners };
