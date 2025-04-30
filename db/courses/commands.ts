import { CreateUserDTO } from "@/models/dtos/user";
import { execute } from "..";

const CreateUser = async (userDto: CreateUserDTO) => {
  const queryText = `
    INSERT INTO gaggle_users(first_name, last_name, email, external_user_id, created_by) 
    VALUES($1, $2, $3, $4, $5) RETURNING id
  `;
  const params: any[] = [userDto.firstName, userDto.lastName, userDto.email, userDto.externalUserlId, process.env.SYSTEM_GUID];
  const result = await execute(queryText, params);
  return result.rows;
};

export { CreateUser };
