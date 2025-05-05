import { UUID } from "../db/base-entity";

export interface CreateGaggleUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  externalUserlId: string;
  createdBy: UUID;
}

export interface GetGaggleUserByIdDTO {
  id: UUID;
}

export interface UpdateGaggleUserByIdDTO {
  id: UUID;
  firstName?: string;
  lastName?: string;
  email?: string;
  externalUserlId?: string;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface GaggleUserDTO {
  id: UUID;
  firstName: string;
  lastName: string;
  email: string;
  isDeleted: boolean;
}
