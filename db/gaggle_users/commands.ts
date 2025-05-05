import { CreateGaggleUserDTO, UpdateGaggleUserByIdDTO } from "@/models/dtos/gaggle_users";
import { execute } from "..";
import { UUID } from "@/models/db/base-entity";

const CreateGaggleUser = async (dto: CreateGaggleUserDTO): Promise<UUID | null> => {
  try {
    const queryText = `
    INSERT INTO public.gaggle_users(first_name, last_name, email, external_user_id, created_by, avatar) 
    VALUES($1, $2, $3, $4, $5, $6) RETURNING id
  `;
    const params: any[] = [dto.firstName, dto.lastName, dto.email, dto.externalUserlId, dto.createdBy, dto.avatar];
    const result = await execute(queryText, params);
    return result.rows.length > 0 ? result.rows[0]["id"] : null;
  } catch (error: any) {
    console.error("Error creating GaggleUser.", error);
    return null;
  }
};

const UpdateGaggleUser = async (dto: UpdateGaggleUserByIdDTO): Promise<number> => {
  try {
    const updates: string[] = [];
    const params: any[] = [dto.id];
    let paramIndex = 2;
    const fields = [
      { name: "first_name", value: dto.firstName },
      { name: "last_name", value: dto.lastName },
      { name: "email", value: dto.email },
      { name: "external_user_id", value: dto.externalUserlId },
      { name: "avatar", value: dto.avatar },
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
      UPDATE public.gaggle_users
      SET ${updates.join(", ")}
      WHERE id = $1
    `;

    const result = await execute(query, params);
    return result.rowCount ?? 0;
  } catch (error: any) {
    console.error("Error updating GaggleUser.", error);
    return -1;
  }
};

export { CreateGaggleUser, UpdateGaggleUser };
