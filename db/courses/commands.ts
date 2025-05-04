import { CreateCourseDTO, UpdateCourseByIdDTO } from "@/models/dtos/courses";
import { execute } from "..";
import { UUID } from "@/models/db/base-entity";

const CreateCourse = async (dto: CreateCourseDTO): Promise<UUID | null> => {
  try {
    const queryText = `
    INSERT INTO public.courses(name, description, address, created_by) 
    VALUES($1, $2, $3, $4) RETURNING id
  `;
    const params: any[] = [dto.name, dto.description, dto.address, dto.createdBy];
    const result = await execute(queryText, params);
    return result.rows.length > 0 ? result.rows[0]["id"] : null;
  } catch (error: any) {
    console.error("Error creating Course.", error);
    return null;
  }
};

const UpdateCourse = async (dto: UpdateCourseByIdDTO): Promise<number> => {
  try {
    const updates: string[] = [];
    const params: any[] = [dto.id];
    let paramIndex = 2;
    const fields = [
      { name: "name", value: dto.name },
      { name: "description", value: dto.description },
      { name: "address", value: dto.address },
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
      UPDATE public.courses
      SET ${updates.join(", ")}
      WHERE id = $1
    `;

    const result = await execute(query, params);
    return result.rowCount ?? 0;
  } catch (error: any) {
    console.error("Error updating Course.", error);
    return -1;
  }
};

export { CreateCourse, UpdateCourse };
