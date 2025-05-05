import { UUID } from "../db/base-entity";

export interface CreateUserRoundInfoDTO {
  userId: UUID;
  tournamentCourseRoundId: UUID;
  grossStrokes: number;
  isPublished: boolean;
  createdBy: UUID;
}

export interface GetUserRoundInfoByIdDTO {
  id: UUID;
}

export interface UpdateUserRoundInfoByIdDTO {
  id: UUID;
  userId?: UUID;
  tournamentCourseRoundId?: UUID;
  grossStrokes?: number;
  isPublished?: boolean;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface UserRoundInfoDTO {
  id: UUID;
  userId: UUID;
  tournamentCourseRoundId: UUID;
  grossStrokes: number;
  isPublished: boolean;
  isDeleted: boolean;
}
