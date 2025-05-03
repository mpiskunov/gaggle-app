import { GaggleUserDTO } from "@/models/dtos/gaggle_users";
import { query } from "..";

const GetUserByExternalId = async (externalUserId: string): Promise<GaggleUserDTO | null> => {
  console.log(externalUserId);
  const result = await query(
    `
        SELECT * 
        FROM gaggle_users 
        WHERE external_user_id = '${externalUserId}'
    `
  );
  if (result.rowCount == 0) return null;
  const user: GaggleUserDTO = {
    id: result.rows[0]["id"],
    firstName: result.rows[0]["first_name"],
    lastName: result.rows[0]["last_name"],
    email: result.rows[0]["email"],
    isDeleted: result.rows[0]["is_deleted"],
  };
  return user;
};

const GetAllUsers = async ({ includeDeleted = false } = {}): Promise<GaggleUserDTO[] | []> => {
  const result = await query(
    `
        SELECT * 
        FROM gaggle_users 
        WHERE is_deleted = '${includeDeleted}'
    `
  );
  if (result.rowCount == 0) return [];

  const accList: GaggleUserDTO[] = result.rows.map((acc) => {
    return {
      id: acc["id"],
      firstName: acc["first_name"],
      lastName: acc["last_name"],
      email: acc["email"],
      isDeleted: acc["is_deleted"],
    };
  });
  return accList;
};

export { GetUserByExternalId, GetAllUsers };
