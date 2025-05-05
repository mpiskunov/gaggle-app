import { UUID } from "../db/base-entity";

export interface CreateUserAccoladeDTO {
  userId: UUID;
  accoladeId: UUID;
  createdBy: UUID;
}

export interface GetUserAccoladeByIdDTO {
  id: UUID;
}

export interface UpdateUserAccoladeByIdDTO {
  id: UUID;
  userId?: UUID;
  accoladeId?: UUID;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface UserAccoladeDTO {
  id: UUID;
  userId: UUID;
  accoladeId: UUID;
  isDeleted: boolean;
}
