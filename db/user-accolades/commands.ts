import { CreateUserAccoladeDTO, UpdateUserAccoladeByIdDTO } from "@/models/dtos/user-accolades";
import { execute } from "..";
import { UUID } from "@/models/db/base-entity";

const CreateUserAccolade = async (dto: CreateUserAccoladeDTO): Promise<UUID | null> => {
  try {
    const queryText = `
      INSERT INTO public.user_accolades(user_id, accolade_id, created_by)
      VALUES($1, $2, $3) RETURNING id
    `;
    const params: any[] = [dto.userId, dto.accoladeId, dto.createdBy];
    const result = await execute(queryText, params);
    return result.rows.length > 0 ? result.rows[0]["id"] : null;
  } catch (error: any) {
    console.error("Error creating UserAccolade.", error);
    return null;
  }
};

const UpdateUserAccolade = async (dto: UpdateUserAccoladeByIdDTO): Promise<number> => {
  try {
    const updates: string[] = [];
    const params: any[] = [dto.id];
    let paramIndex = 2;
    const fields = [
      { name: "user_id", value: dto.userId },
      { name: "accolade_id", value: dto.accoladeId },
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
      UPDATE public.user_accolades
      SET ${updates.join(", ")}
      WHERE id = $1
    `;

    const result = await execute(query, params);
    return result.rowCount ?? 0;
  } catch (error: any) {
    console.error("Error updating UserAccolade.", error);
    return -1;
  }
};

export { CreateUserAccolade, UpdateUserAccolade };
