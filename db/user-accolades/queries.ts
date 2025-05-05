import { UserAccoladeDTO } from "@/models/dtos/user-accolades";
import { query } from "..";
import { UUID } from "@/models/db/base-entity";

const GetUserAccoladeById = async (id: UUID): Promise<UserAccoladeDTO | null> => {
  try {
    const params: any[] = [id];
    const text = `
      SELECT * 
      FROM public.user_accolades
      WHERE id = $1
    `;

    const result = await query(text, params);
    if (result.rowCount === 0) return null;
    const item = result.rows[0];
    const dto: UserAccoladeDTO = {
      id: item["id"],
      isDeleted: item["is_deleted"],
      userId: item["user_id"],
      accoladeId: item["accolade_id"],
    };
    return dto;
  } catch (error: any) {
    console.error(`Error getting UserAccolade: ${id}`, error);
    return null;
  }
};

const GetAllUserAccolades = async ({ includeDeleted = false } = {}): Promise<UserAccoladeDTO[] | []> => {
  try {
    const params: any[] = [includeDeleted];
    const text = `
      SELECT * 
      FROM public.user_accolades
      WHERE is_deleted = FALSE 
      OR (is_deleted = TRUE AND $1 = TRUE);
    `;
    const result = await query(text, params);

    if (result.rowCount == 0) return [];

    const list: UserAccoladeDTO[] = result.rows.map((item) => {
      return {
        id: item["id"],
        isDeleted: item["is_deleted"],
        userId: item["user_id"],
        accoladeId: item["accolade_id"],
      };
    });
    return list;
  } catch (error: any) {
    console.error(`Error getting all UserAccolades.`, error);
    return [];
  }
};

export { GetUserAccoladeById, GetAllUserAccolades };
