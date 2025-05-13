import { BaseEntity, UUID } from "./base-entity";

export class TournamentCourse extends BaseEntity {
  constructor(createdBy: string, createdDate: Date, tournamentId: UUID, courseId: UUID, winnerId: UUID, order: number) {
    super(createdBy, createdDate);
    this.tournamentId = tournamentId;
    this.courseId = courseId;
    this.winnerId = winnerId;
    this.order = order;
  }
  tournamentId: UUID;
  courseId: UUID;
  winnerId: UUID;
  order: number;
}
