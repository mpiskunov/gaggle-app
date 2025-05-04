import { UUID } from "../db/base-entity";

export interface CreateTournamentCourseDTO {
  tournamentId: UUID;
  courseId: UUID;
  winnerId?: UUID;
  createdBy: UUID;
}

export interface GetTournamentCourseByIdDTO {
  id: UUID;
}

export interface UpdateTournamentCourseByIdDTO {
  id: UUID;
  tournamentId?: UUID;
  courseId?: UUID;
  winnerId?: UUID;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface TournamentCourseDTO {
  id: UUID;
  tournamentId: UUID;
  courseId: UUID;
  winnerId?: UUID;
  isDeleted: boolean;
}
