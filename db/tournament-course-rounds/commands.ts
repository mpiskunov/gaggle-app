import { CreateTournamentCourseRoundDTO, UpdateTournamentCourseRoundByIdDTO } from "@/models/dtos/tournament-course-rounds";
import { execute } from "..";
import { UUID } from "@/models/db/base-entity";

const CreateTournamentCourseRound = async (dto: CreateTournamentCourseRoundDTO): Promise<UUID | null> => {
  try {
    const queryText = `
      INSERT INTO public.tournament_course_rounds(
      created_by,
      course_id,
      tournament_course_id,
      course_round_number,
      number_of_holes,
      tournament_round_number,
      start_date,
      end_date,
      penalty_date,
      tournament_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
  `;
    const params: any[] = [
      dto.createdBy,
      dto.courseId,
      dto.tournamentCourseId,
      dto.courseRoundNumber,
      dto.numberOfHoles,
      dto.tournamentRoundNumber,
      dto.startDate,
      dto.endDate,
      dto.penaltyDate,
      dto.tournamentId,
    ];
    const result = await execute(queryText, params);
    return result.rows.length > 0 ? result.rows[0]["id"] : null;
  } catch (error: any) {
    console.error("Error creating TournamentCourseRound.", error);
    return null;
  }
};

const UpdateTournamentCourseRound = async (dto: UpdateTournamentCourseRoundByIdDTO): Promise<number> => {
  try {
    const updates: string[] = [];
    const params: any[] = [dto.id];
    let paramIndex = 2;
    const fields = [
      { name: "course_id", value: dto.courseId },
      { name: "tournament_course_id", value: dto.tournamentCourseId },
      { name: "tournament_id", value: dto.tournamentId },
      { name: "course_round_number", value: dto.courseRoundNumber },
      { name: "number_of_holes", value: dto.numberOfHoles },
      { name: "tournament_round_number", value: dto.tournamentRoundNumber },
      { name: "start_date", value: dto.startDate },
      { name: "end_date", value: dto.endDate },
      { name: "penalty_date", value: dto.penaltyDate },
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
      UPDATE public.tournament_course_rounds
      SET ${updates.join(", ")}
      WHERE id = $1
    `;

    const result = await execute(query, params);
    return result.rowCount ?? 0;
  } catch (error: any) {
    console.error("Error updating TournamentCourseRound.", error);
    return -1;
  }
};

export { CreateTournamentCourseRound, UpdateTournamentCourseRound };
