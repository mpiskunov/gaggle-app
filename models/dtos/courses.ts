import { UUID } from "../db/base-entity";

export interface CreateCourseDTO {
  name: string;
  description: string;
  address: string;
  createdBy: UUID;
}

export interface GetCourseByIdDTO {
  id: UUID;
}

export interface UpdateCourseByIdDTO {
  id: UUID;
  name?: string;
  description?: string;
  address?: string;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface CourseDTO {
  id: UUID;
  name: string;
  address: string;
  description: string;
  isDeleted: boolean;
}
