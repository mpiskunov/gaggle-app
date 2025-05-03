import { UUID } from "../db/base-entity";

export interface CreateUserCourseInfoDTO {
  userId: UUID;
  courseId: UUID;
  handicap: number;
  isPublished: boolean;
  createdBy: UUID;
}

export interface GetUserCourseInfoByIdDTO {
  id: UUID;
}

export interface UpdateUserCourseInfoByIdDTO {
  id: UUID;
  userId?: UUID;
  courseId?: UUID;
  handicap?: number;
  isPublished?: boolean;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface UserCourseInfoDTO {
  id: UUID;
  userId: UUID;
  courseId: UUID;
  handicap: number;
  isPublished: boolean;
  isDeleted: boolean;
}
