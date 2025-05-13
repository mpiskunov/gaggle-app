import { UUID } from "../db/base-entity";

export interface CreateTournamentParticipantDTO {
  tournamentId: UUID;
  userId: UUID;
  createdBy: UUID;
}

export interface GetTournamentParticipantByIdDTO {
  id: UUID;
}

export interface UpdateTournamentParticipantByIdDTO {
  id: UUID;
  tournamentId?: UUID;
  userId?: UUID;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface TournamentParticipantDTO {
  id: UUID;
  tournamentId: UUID;
  userId: UUID;
  isDeleted: boolean;
}
