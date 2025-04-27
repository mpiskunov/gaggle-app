import { BaseEntity, UUID } from "./base-entity";

export class UserCourseInfo extends BaseEntity {
  constructor(createdBy: string, createdDate: Date, userId: UUID, courseId: UUID, handicap: number, isPublished: boolean) {
    super(createdBy, createdDate);
    this.userId = userId;
    this.courseId = courseId;
    this.handicap = handicap;
    this.isPublished = isPublished;
  }
  userId: UUID;
  courseId: UUID;
  handicap: number;
  isPublished: boolean;
}
