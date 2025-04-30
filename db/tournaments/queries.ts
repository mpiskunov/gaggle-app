import { GaggleUserDTO } from "@/models/dtos/user";
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

  const userList: GaggleUserDTO[] = result.rows.map((user) => {
    return {
      id: user["id"],
      firstName: user["first_name"],
      lastName: user["last_name"],
      email: user["email"],
    };
  });
  return userList;
};

export { GetUserByExternalId, GetAllUsers };
