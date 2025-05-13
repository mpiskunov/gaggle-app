import { BaseEntity, UUID } from "./base-entity";

export class TournamentCommissioner extends BaseEntity {
  constructor(createdBy: string, createdDate: Date, tournamentId: UUID, userId: UUID) {
    super(createdBy, createdDate);
    this.tournamentId = tournamentId;
    this.userId = userId;
  }
  tournamentId: UUID;
  userId: UUID;
}
