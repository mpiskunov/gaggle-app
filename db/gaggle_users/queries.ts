import { GaggleUserDTO } from "@/models/dtos/gaggle_users";
import { query } from "..";
import { UUID } from "@/models/db/base-entity";

const GetUserByExternalId = async (externalUserId: string): Promise<GaggleUserDTO | null> => {
  const params: any[] = [externalUserId];
  const text = `
    SELECT * 
    FROM public.gaggle_users 
    WHERE external_user_id = $1
  `;

  const result = await query(text, params);
  if (result.rowCount == 0) return null;
  const item = result.rows[0];
  const user: GaggleUserDTO = {
    id: item["id"],
    firstName: item["first_name"],
    lastName: item["last_name"],
    email: item["email"],
    isDeleted: item["is_deleted"],
    externalUserlId: item["external_user_id"],
    avatar: item["avatar"],
  };
  return user;
};

const GetGaggleUserById = async (id: UUID): Promise<GaggleUserDTO | null> => {
  try {
    const params: any[] = [id];
    const text = `
      SELECT * 
      FROM public.gaggle_users
      WHERE id = $1
    `;

    const result = await query(text, params);
    if (result.rowCount === 0) return null;
    const item = result.rows[0];
    const dto: GaggleUserDTO = {
      id: item["id"],
      firstName: item["first_name"],
      lastName: item["last_name"],
      email: item["email"],
      isDeleted: item["is_deleted"],
      externalUserlId: item["external_user_id"],
    };
    return dto;
  } catch (error: any) {
    console.error(`Error getting GaggleUser: ${id}`, error);
    return null;
  }
};

const GetAllGaggleUsers = async ({ includeDeleted = false } = {}): Promise<GaggleUserDTO[] | []> => {
  try {
    const params: any[] = [includeDeleted];
    const text = `
      SELECT * 
      FROM public.gaggle_users
      WHERE is_deleted = FALSE 
      OR (is_deleted = TRUE AND $1 = TRUE);
    `;
    const result = await query(text, params);

    if (result.rowCount == 0) return [];

    const list: GaggleUserDTO[] = result.rows.map((item) => {
      return {
        id: item["id"],
        firstName: item["first_name"],
        lastName: item["last_name"],
        email: item["email"],
        isDeleted: item["is_deleted"],
        externalUserlId: item["external_user_id"],
      };
    });
    return list;
  } catch (error: any) {
    console.error(`Error getting all GaggleUsers.`, error);
    return [];
  }
};

export { GetUserByExternalId, GetGaggleUserById, GetAllGaggleUsers };
