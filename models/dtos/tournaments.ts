import { UUID } from "../db/base-entity";

export interface CreateTournamentDTO {
  name: string;
  year: string;
  description: string;
  code: string;
  createdBy: UUID;
}

export interface GetTournamentByIdDTO {
  id: UUID;
}

export interface UpdateTournamentByIdDTO {
  id: UUID;
  name?: string;
  year?: string;
  description?: string;
  winnerId?: UUID;
  code?: string;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface TournamentDTO {
  id: UUID;
  name: string;
  year: string;
  description: string;
  winnerId: UUID;
  code: string;
  isDeleted: boolean;
}
