import { CreateTournamentCourseDTO, UpdateTournamentCourseByIdDTO } from "@/models/dtos/tournament-courses";
import { execute } from "..";
import { UUID } from "@/models/db/base-entity";

const CreateTournamentCourse = async (dto: CreateTournamentCourseDTO): Promise<UUID | null> => {
  try {
    const queryText = `
    INSERT INTO public.tournament_courses(created_by, tournament_id, course_id, winner_id, "order")
      VALUES ($1, $2, $3, $4, $5);
  `;
    const params: any[] = [dto.createdBy, dto.tournamentId, dto.courseId, dto.winnerId, dto.order];
    const result = await execute(queryText, params);
    return result.rows.length > 0 ? result.rows[0]["id"] : null;
  } catch (error: any) {
    console.error("Error creating TournamentCourse.", error);
    return null;
  }
};

const UpdateTournamentCourse = async (dto: UpdateTournamentCourseByIdDTO): Promise<number> => {
  try {
    const updates: string[] = [];
    const params: any[] = [dto.id];
    let paramIndex = 2;
    const fields = [
      { name: "course_id", value: dto.courseId },
      { name: "tournament_id", value: dto.tournamentId },
      { name: "winner_id", value: dto.winnerId },
      { name: "order", value: dto.order },
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
      UPDATE public.tournament_courses
      SET ${updates.join(", ")}
      WHERE id = $1
    `;

    const result = await execute(query, params);
    return result.rowCount ?? 0;
  } catch (error: any) {
    console.error("Error updating TournamentCourse.", error);
    return -1;
  }
};

export { CreateTournamentCourse, UpdateTournamentCourse };
