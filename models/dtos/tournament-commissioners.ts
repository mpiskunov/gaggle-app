import { UUID } from "../db/base-entity";

export interface CreateTournamentCommissionerDTO {
  tournamentId: UUID;
  userId: UUID;
  createdBy: UUID;
}

export interface GetTournamentCommissionerByIdDTO {
  id: UUID;
}

export interface UpdateTournamentCommissionerByIdDTO {
  id: UUID;
  tournamentId?: UUID;
  userId?: UUID;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface TournamentCommissionerDTO {
  id: UUID;
  tournamentId: UUID;
  userId: UUID;
  isDeleted: boolean;
}
