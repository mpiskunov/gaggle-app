import { UUID } from "../db/base-entity";

export interface CreateUserCourseRoundAccoladeDTO {
  userId: UUID;
  tournamentCourseRoundId: UUID;
  accoladeId: UUID;
  count: number;
  isPublished: boolean;
  createdBy: UUID;
}

export interface GetUserCourseRoundAccoladeByIdDTO {
  id: UUID;
}

export interface UpdateUserCourseRoundAccoladeByIdDTO {
  id: UUID;
  userId?: UUID;
  tournamentCourseRoundId?: UUID;
  accoladeId?: UUID;
  count?: number;
  isPublished?: boolean;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface UserCourseRoundAccoladeDTO {
  id: UUID;
  userId: UUID;
  tournamentCourseRoundId: UUID;
  accoladeId: UUID;
  count: number;
  isPublished: boolean;
  isDeleted: boolean;
}
