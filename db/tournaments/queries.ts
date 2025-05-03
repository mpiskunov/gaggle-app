import { GetTournamentByIdDTO, TournamentDTO } from "@/models/dtos/tournaments";
import { query } from "..";
import { UUID } from "@/models/db/base-entity";

const GetTournamentById = async (tournamentId: UUID): Promise<GetTournamentByIdDTO | null> => {
  const result = await query(
    `
        SELECT * 
        FROM tournaments 
        WHERE id = '${tournamentId}'
    `
  );
  if (result.rowCount == 0) return null;
  const Tournament: TournamentDTO = {
    id: result.rows[0]["id"],
    name: result.rows[0]["name"],
    year: result.rows[0]["year"],
    description: result.rows[0]["description"],
    winnerId: result.rows[0]["winner_id"],
    isDeleted: result.rows[0]["isDeleted"],
  };
  return Tournament;
};

const GetAllTournaments = async ({ includeDeleted = false } = {}): Promise<TournamentDTO[] | []> => {
  let queryString = ` 
        SELECT * 
        FROM tournaments `;
  if (!includeDeleted) queryString += "WHERE is_deleted = true";
  const result = await query(queryString);
  if (result.rowCount == 0) return [];

  const TournamentList: TournamentDTO[] = result.rows.map((tournament) => {
    return {
      id: tournament["id"],
      name: tournament["name"],
      year: tournament["year"],
      description: tournament["description"],
      winnerId: tournament["winner_id"],
      isDeleted: tournament["is_deleted"],
    };
  });
  return TournamentList;
};

export { GetTournamentById, GetAllTournaments };
