import { CreateTournamentDTO, UpdateTournamentByIdDTO } from "@/models/dtos/tournaments";
import { execute } from "..";
import { UUID } from "@/models/db/base-entity";

const CreateTournament = async (dto: CreateTournamentDTO): Promise<UUID | null> => {
  try {
    const queryText = `
      INSERT INTO public.tournaments(name, year, description, created_by, code)
      VALUES($1, $2, $3, $4, $5) RETURNING id
    `;
    const params: any[] = [dto.name, dto.year, dto.description, dto.createdBy, dto.code];
    const result = await execute(queryText, params);
    return result.rows.length > 0 ? result.rows[0]["id"] : null;
  } catch (error: any) {
    console.error("Error creating Tournament.", error);
    return null;
  }
};

const UpdateTournament = async (dto: UpdateTournamentByIdDTO): Promise<number> => {
  try {
    const updates: string[] = [];
    const params: any[] = [dto.id];
    let paramIndex = 2;
    const fields = [
      { name: "name", value: dto.name },
      { name: "year", value: dto.year },
      { name: "description", value: dto.description },
      { name: "winner_id", value: dto.winnerId },
      { name: "is_deleted", value: dto.isDeleted },
      { name: "updated_by", value: dto.updatedBy },
      { name: "code", value: dto.code },
    ];

    for (const field of fields) {
      if (field.value !== undefined) {
        updates.push(`${field.name} = $${paramIndex++}`);
        params.push(field.value);
      }
    }

    if (updates.length === 0) {
      return 0;
    }

    const query = `
      UPDATE public.tournaments
      SET ${updates.join(", ")}
      WHERE id = $1
    `;

    const result = await execute(query, params);
    return result.rowCount ?? 0;
  } catch (error: any) {
    console.error("Error updating Tournament.", error);
    return -1;
  }
};

export { CreateTournament, UpdateTournament };
