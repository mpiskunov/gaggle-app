import { UUID } from "../db/base-entity";

export interface CreateTournamentDTO {
  courseId: UUID;
  tournamentCourseId: UUID;
  courseRoundNumber: number;
  numberOfHoles: number;
  tournamentRoundNumber: number;
  startDate: Date;
  endDate: Date;
  penaltyDate: Date;
  createdBy: UUID;
}

export interface GetTournamentByIdDTO {
  id: UUID;
}

export interface UpdateTournamentByIdDTO {
  id: UUID;
  courseId?: UUID;
  tournamentCourseId?: UUID;
  courseRoundNumber?: number;
  numberOfHoles?: number;
  tournamentRoundNumber?: number;
  startDate?: Date;
  endDate?: Date;
  penaltyDate?: Date;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface TournamentDTO {
  id: UUID;
  courseId: UUID;
  tournamentCourseId: UUID;
  courseRoundNumber: number;
  numberOfHoles: number;
  tournamentRoundNumber: number;
  startDate: Date;
  endDate: Date;
  penaltyDate: Date;
  isDeleted: boolean;
}
