import { execute } from "..";

const CreateUser = async (firstName: string, lastName: string, email: string, externalUserId: string) => {
  const queryText = `
    INSERT INTO gaggle_users(first_name, last_name, email, external_user_id, created_by) 
    VALUES($1, $2, $3, $4, $5) RETURNING id
  `;
  const params: any[] = [firstName, lastName, email, externalUserId, process.env.SYSTEM_GUID];
  const result = await execute(queryText, params);
  return result.rows;
};

export { CreateUser };
