import { BaseEntity, UUID } from "./BaseEntity";

export class UserCourseRoundAccolade extends BaseEntity {
  constructor(
    createdBy: string,
    createdDate: Date,
    userId: UUID,
    tournamentCourseRoundId: UUID,
    accoladeId: UUID,
    count: number,
    isPublished: boolean
  ) {
    super(createdBy, createdDate);
    this.userId = userId;
    this.tournamentCourseRoundId = tournamentCourseRoundId;
    this.accoladeId = accoladeId;
    this.count = count;
    this.isPublished = isPublished;
  }
  userId: UUID;
  tournamentCourseRoundId: UUID;
  accoladeId: UUID;
  count: number;
  isPublished: boolean;
}
