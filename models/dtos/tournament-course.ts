import { UUID } from "../db/base-entity";

export interface CreateTournamentDTO {
  tournamentId: UUID;
  courseId: UUID;
  winnerId?: UUID;
  createdBy: UUID;
}

export interface GetTournamentByIdDTO {
  id: UUID;
}

export interface UpdateTournamentByIdDTO {
  id: UUID;
  tournamentId?: UUID;
  courseId?: UUID;
  winnerId?: UUID;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface TournamentDTO {
  id: UUID;
  tournamentId: UUID;
  courseId: UUID;
  winnerId?: UUID;
  isDeleted: boolean;
}
