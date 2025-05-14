import { UUID } from "../db/base-entity";

export interface CreateTournamentCourseRoundDTO {
  courseId: UUID;
  tournamentCourseId: UUID;
  tournamentId: UUID;
  courseRoundNumber: number;
  numberOfHoles: number;
  tournamentRoundNumber: number;
  startDate: Date;
  endDate: Date;
  createdBy: UUID;
}

export interface GetTournamentCourseRoundByIdDTO {
  id: UUID;
}

export interface UpdateTournamentCourseRoundByIdDTO {
  id: UUID;
  courseId?: UUID;
  tournamentCourseId?: UUID;
  tournamentId: UUID;
  courseRoundNumber?: number;
  numberOfHoles?: number;
  tournamentRoundNumber?: number;
  startDate?: Date;
  endDate?: Date;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface FullTournamentCourseRoundDTO {
  id: UUID;
  courseId: UUID;
  tournamentCourseId: UUID;
  tournamentId: UUID;
  courseRoundNumber: number;
  numberOfHoles: number;
  tournamentRoundNumber: number;
  startDate: Date;
  endDate: Date;
  isDeleted: boolean;
}
