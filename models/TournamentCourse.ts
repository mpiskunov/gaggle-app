import { BaseEntity, UUID } from "./BaseEntity";

export class TournamentCourse extends BaseEntity {
  constructor(createdBy: string, createdDate: Date, tournamentId: UUID, courseId: UUID, winnerId: UUID) {
    super(createdBy, createdDate);
    this.tournamentId = tournamentId;
    this.courseId = courseId;
    this.winnerId = winnerId;
  }
  tournamentId: UUID;
  courseId: UUID;
  winnerId: UUID;
}
