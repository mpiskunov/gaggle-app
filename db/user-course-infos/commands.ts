import { CreateUserCourseInfoDTO, UpdateUserCourseInfoByIdDTO } from "@/models/dtos/user-course-infos";
import { execute } from "..";
import { UUID } from "@/models/db/base-entity";

const CreateUserCourseInfo = async (dto: CreateUserCourseInfoDTO): Promise<UUID | null> => {
  try {
    const queryText = `
      INSERT INTO public.user_course_infos(created_by, user_id, course_id, handicap, is_published)
      VALUES($1, $2, $3, $4, $5) RETURNING id
    `;
    const params: any[] = [dto.createdBy, dto.userId, dto.courseId, dto.handicap, dto.isPublished];
    const result = await execute(queryText, params);
    return result.rows.length > 0 ? result.rows[0]["id"] : null;
  } catch (error: any) {
    console.error("Error creating UserCourseInfo.", error);
    return null;
  }
};

const UpdateUserCourseInfo = async (dto: UpdateUserCourseInfoByIdDTO): Promise<number> => {
  try {
    const updates: string[] = [];
    const params: any[] = [dto.id];
    let paramIndex = 2;
    const fields = [
      { name: "user_id", value: dto.userId },
      { name: "course_id", value: dto.courseId },
      { name: "handicap", value: dto.handicap },
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
      UPDATE public.user_course_infos
      SET ${updates.join(", ")}
      WHERE id = $1
    `;

    const result = await execute(query, params);
    return result.rowCount ?? 0;
  } catch (error: any) {
    console.error("Error updating UserCourseInfo.", error);
    return -1;
  }
};

export { CreateUserCourseInfo, UpdateUserCourseInfo };
