import { UUID } from "../db/base-entity";

export interface CreateUserRoundInfoDTO {
  userId: UUID;
  accoladeID: UUID;
  createdBy: UUID;
}

export interface GetUserRoundInfoByIdDTO {
  id: UUID;
}

export interface UpdateUserRoundInfoByIdDTO {
  id: UUID;
  userId?: UUID;
  accoladeID?: UUID;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface UserRoundInfoDTO {
  id: UUID;
  userId: UUID;
  accoladeID: UUID;
  isDeleted: boolean;
}
