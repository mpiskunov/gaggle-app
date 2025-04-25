import { BaseEntity, UUID } from "./BaseEntity";

export class UserRoundInfo extends BaseEntity {
  constructor(createdBy: string, createdDate: Date, userId: UUID, tournamentCourseRoundId: UUID, grossStrokes: number, isPublished: boolean) {
    super(createdBy, createdDate);
    this.userId = userId;
    this.tournamentCourseRoundId = tournamentCourseRoundId;
    this.grossStrokes = grossStrokes;
    this.isPublished = isPublished;
  }
  userId: UUID;
  tournamentCourseRoundId: UUID;
  grossStrokes: number;
  isPublished: boolean;
}
