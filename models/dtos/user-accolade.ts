import { UUID } from "../db/base-entity";

export interface CreateUserAccoladeInfoDTO {
  userId: UUID;
  accoladeID: UUID;
  createdBy: UUID;
}

export interface GetUserAccoladeInfoByIdDTO {
  id: UUID;
}

export interface UpdateUserAccoladeInfoByIdDTO {
  id: UUID;
  userId?: UUID;
  accoladeID?: UUID;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface UserAccoladeInfoDTO {
  id: UUID;
  userId: UUID;
  accoladeID: UUID;
  isDeleted: boolean;
}
