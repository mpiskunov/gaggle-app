import { UUID } from "../db/base-entity";

export interface CreateUserRoundInfoDTO {
  name: string;
  description: string;
  value: string;
  createdBy: UUID;
}

export interface GetUserRoundInfoByIdDTO {
  id: UUID;
}

export interface UpdateUserRoundInfoByIdDTO {
  id: UUID;
  name?: string;
  description?: string;
  value?: string;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface UserRoundInfoDTO {
  id: UUID;
  name: string;
  value: string;
  description: string;
  isDeleted: boolean;
}
