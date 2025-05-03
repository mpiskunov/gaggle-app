import { CreateTournamentDTO } from "@/models/dtos/tournaments";
import { execute } from "..";

const CreateTournament = async (tournamentDTO: CreateTournamentDTO) => {
  const queryText = `
    INSERT INTO tournaments(name, year, description, created_by) 
    VALUES($1, $2, $3, $4) RETURNING id
  `;
  const params: any[] = [tournamentDTO.name, tournamentDTO.year, tournamentDTO.description, process.env.SYSTEM_GUID];
  const result = await execute(queryText, params);
  return result.rows;
};

export { CreateTournament };
