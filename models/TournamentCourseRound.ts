import { BaseEntity, UUID } from "./BaseEntity";

class TournamentCourseRound extends BaseEntity {
  constructor(
    createdBy: string,
    createdDate: Date,
    courseId: UUID,
    tournamentCourseId: UUID,
    courseRoundNumber: number,
    numberOfHoles: number,
    tournamentRoundNumber: number,
    startDate: Date,
    endDate: Date,
    penaltyDate: Date
  ) {
    super(createdBy, createdDate);
    this.courseId = courseId;
    this.tournamentCourseId = tournamentCourseId;
    this.courseRoundNumber = courseRoundNumber;
    this.numberOfHoles = numberOfHoles;
    this.tournamentRoundNumber = tournamentRoundNumber;
    this.startDate = startDate;
    this.endDate = endDate;
    this.penaltyDate = penaltyDate;
  }
  courseId: UUID;
  tournamentCourseId: UUID;
  courseRoundNumber: number;
  numberOfHoles: number;
  tournamentRoundNumber: number;
  startDate: Date;
  endDate: Date;
  penaltyDate: Date;
}
