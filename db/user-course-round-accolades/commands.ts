import { CreateUserCourseRoundAccoladeDTO, UpdateUserCourseRoundAccoladeByIdDTO } from "@/models/dtos/user-course-round-accolades";
import { execute } from "..";
import { UUID } from "@/models/db/base-entity";

const CreateUserCourseRoundAccolade = async (dto: CreateUserCourseRoundAccoladeDTO): Promise<UUID | null> => {
  try {
    const queryText = `
      INSERT INTO public.user_course_round_accolades(created_by, user_id, tournament_course_round_id, accolade_id, count, is_published)
      VALUES($1, $2, $3, $4, $5, $6) RETURNING id
    `;
    const params: any[] = [dto.createdBy, dto.userId, dto.tournamentCourseRoundId, dto.accoladeId, dto.count, dto.isPublished];
    const result = await execute(queryText, params);
    return result.rows.length > 0 ? result.rows[0]["id"] : null;
  } catch (error: any) {
    console.error("Error creating UserCourseRoundAccolade.", error);
    return null;
  }
};

const UpdateUserCourseRoundAccolade = async (dto: UpdateUserCourseRoundAccoladeByIdDTO): Promise<number> => {
  try {
    const updates: string[] = [];
    const params: any[] = [dto.id];
    let paramIndex = 2;
    const fields = [
      { name: "user_id", value: dto.userId },
      { name: "tournament_course_round_id", value: dto.tournamentCourseRoundId },
      { name: "accolade_id", value: dto.accoladeId },
      { name: "count", value: dto.count },
      { name: "is_published", value: dto.isPublished },
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
      UPDATE public.user_course_round_accolades
      SET ${updates.join(", ")}
      WHERE id = $1
    `;

    const result = await execute(query, params);
    return result.rowCount ?? 0;
  } catch (error: any) {
    console.error("Error updating UserCourseRoundAccolade.", error);
    return -1;
  }
};

export { CreateUserCourseRoundAccolade, UpdateUserCourseRoundAccolade };
