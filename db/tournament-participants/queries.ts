import { TournamentParticipantDTO } from "@/models/dtos/tournament-participant";
import { query } from "..";
import { UUID } from "@/models/db/base-entity";

const GetTournamentParticipantById = async (id: UUID): Promise<TournamentParticipantDTO | null> => {
  try {
    const params: any[] = [id];
    const text = `
      SELECT * 
      FROM public.tournament_participants
      WHERE id = $1
    `;

    const result = await query(text, params);
    if (result.rowCount === 0) return null;
    const item = result.rows[0];
    const dto: TournamentParticipantDTO = {
      id: item["id"],
      userId: item["user_id"],
      isDeleted: item["is_deleted"],
      tournamentId: item["tournament_id"],
    };
    return dto;
  } catch (error: any) {
    console.error(`Error getting TournamentParticipant: ${id}`, error);
    return null;
  }
};

const GetAllTournamentParticipants = async ({ includeDeleted = false } = {}): Promise<TournamentParticipantDTO[] | []> => {
  try {
    const params: any[] = [includeDeleted];
    const text = `
      SELECT * 
      FROM public.tournament_participants
      WHERE is_deleted = FALSE 
      OR (is_deleted = TRUE AND $1 = TRUE);
    `;
    const result = await query(text, params);

    if (result.rowCount == 0) return [];

    const list: TournamentParticipantDTO[] = result.rows.map((item) => {
      return {
        id: item["id"],
        userId: item["user_id"],
        isDeleted: item["is_deleted"],
        tournamentId: item["tournament_id"],
      };
    });
    return list;
  } catch (error: any) {
    console.error(`Error getting all TournamentParticipants.`, error);
    return [];
  }
};

export { GetTournamentParticipantById, GetAllTournamentParticipants };
