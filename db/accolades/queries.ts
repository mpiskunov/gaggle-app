import { AccoladeDTO } from "@/models/dtos/accolades";
import { query } from "..";
import { UUID } from "@/models/db/base-entity";

const GetAccoladeById = async (id: UUID): Promise<AccoladeDTO | null> => {
  try {
    const params: any[] = [id];
    const text = `
      SELECT * 
      FROM public.accolades
      WHERE id = $1
    `;

    const result = await query(text, params);
    if (result.rowCount === 0) return null;
    const item = result.rows[0];
    const accolade: AccoladeDTO = {
      id: item["id"],
      name: item["name"],
      description: item["description"],
      value: item["value"],
      isDeleted: item["is_deleted"],
    };
    return accolade;
  } catch (error: any) {
    console.error(`Error getting Accolade: ${id}`, error);
    return null;
  }
};

const GetAllAccolades = async ({ includeDeleted = false } = {}): Promise<AccoladeDTO[] | []> => {
  try {
    const params: any[] = [includeDeleted];
    const text = `
    SELECT * 
    FROM public.accolades
    WHERE is_deleted = FALSE 
    OR (is_deleted = TRUE AND $1 = TRUE);
  `;
    const result = await query(text, params);

    if (result.rowCount == 0) return [];

    const list: AccoladeDTO[] = result.rows.map((item) => {
      return {
        id: item["id"],
        name: item["name"],
        description: item["description"],
        value: item["value"],
        isDeleted: item["is_deleted"],
      };
    });
    return list;
  } catch (error: any) {
    console.error(`Error getting all Accolades.`, error);
    return [];
  }
};

export { GetAccoladeById, GetAllAccolades };
