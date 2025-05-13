import { CreateTournamentParticipantDTO, UpdateTournamentParticipantByIdDTO } from "@/models/dtos/tournament-participant";
import { execute } from "..";
import { UUID } from "@/models/db/base-entity";

const CreateTournamentParticipant = async (dto: CreateTournamentParticipantDTO): Promise<UUID | null> => {
  try {
    const queryText = `
    INSERT INTO public.tournament_participants(created_by, tournament_id, userId)
      VALUES ($1, $2, $3);
  `;
    const params: any[] = [dto.createdBy, dto.tournamentId, dto.userId];
    const result = await execute(queryText, params);
    return result.rows.length > 0 ? result.rows[0]["id"] : null;
  } catch (error: any) {
    console.error("Error creating TournamentParticipant.", error);
    return null;
  }
};

const UpdateTournamentParticipant = async (dto: UpdateTournamentParticipantByIdDTO): Promise<number> => {
  try {
    const updates: string[] = [];
    const params: any[] = [dto.id];
    let paramIndex = 2;
    const fields = [
      { name: "user_id", value: dto.userId },
      { name: "tournament_id", value: dto.tournamentId },
      { name: "is_deleted", value: dto.isDeleted },
      { name: "updated_by", value: dto.updatedBy },
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
      UPDATE public.tournament_participants
      SET ${updates.join(", ")}
      WHERE id = $1
    `;

    const result = await execute(query, params);
    return result.rowCount ?? 0;
  } catch (error: any) {
    console.error("Error updating TournamentParticipant.", error);
    return -1;
  }
};

export { CreateTournamentParticipant, UpdateTournamentParticipant };
