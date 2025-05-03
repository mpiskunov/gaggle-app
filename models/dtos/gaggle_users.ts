import { UUID } from "../db/base-entity";

export interface GaggleUserDTO {
  id: UUID;
  firstName: string;
  lastName: string;
  email: string;
  isDeleted: boolean;
}

export interface CreateUserDTO {
  firstName: string;
  lastName: string;
  email: string;
  externalUserlId: string;
  createdBy: UUID;
}
