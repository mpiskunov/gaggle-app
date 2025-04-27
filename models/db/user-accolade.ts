import { BaseEntity, UUID } from "./base-entity";

// this class will be used to track things like last year's winner, special user emblems, etc.
export class UserCourseAccolade extends BaseEntity {
  constructor(createdBy: string, createdDate: Date, userId: UUID, accoladeId: UUID) {
    super(createdBy, createdDate);
    this.userId = userId;
    this.accoladeId = accoladeId;
  }
  userId: UUID;
  accoladeId: UUID;
}
