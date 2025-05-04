import { UUID } from "../db/base-entity";

export interface CreateAccoladeDTO {
  name: string;
  description: string;
  value: string;
  createdBy: UUID;
}

export interface GetAccoladeByIdDTO {
  id: UUID;
}

export interface UpdateAccoladeByIdDTO {
  id: UUID;
  name?: string;
  description?: string;
  value?: string;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface AccoladeDTO {
  id: UUID;
  name: string;
  description: string;
  value: string;
  isDeleted: boolean;
}
