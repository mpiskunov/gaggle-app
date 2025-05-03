import { CreateAccoladeDTO, UpdateAccoladeByIdDTO } from "@/models/dtos/accolades";
import { execute } from "..";
import { UUID } from "@/models/db/base-entity";

const CreateAccolade = async (accDto: CreateAccoladeDTO): Promise<UUID | null> => {
  const queryText = `
    INSERT INTO accolades(name, description, value, created_by) 
    VALUES($1, $2, $3, $4) RETURNING id
  `;
  const params: any[] = [accDto.name, accDto.description, accDto.value, accDto.createdBy ?? process.env.SYSTEM_GUID];
  const result = await execute(queryText, params);
  return result.rows.length > 0 ? result.rows[0]["id"] : null;
};

const UpdateAccolade = async (dto: UpdateAccoladeByIdDTO): Promise<number> => {
  try {
    const updates: string[] = [];
    const params: any[] = [dto.id]; //  id is always the first parameter
    let paramIndex = 2;

    const fields = [
      { name: "name", value: dto.name },
      { name: "description", value: dto.description },
      { name: "value", value: dto.value },
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
      UPDATE public.accolades
      SET ${updates.join(", ")}
      WHERE id = $1
    `;

    const result = await execute(query, params);
    return result.rowCount ?? 0;
  } catch (error: any) {
    console.error("Error updating accolade:", error);
    return -1;
  }
};

export { CreateAccolade, UpdateAccolade };
