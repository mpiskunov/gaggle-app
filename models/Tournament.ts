import { BaseEntity, UUID } from "./BaseEntity";

class Tournament extends BaseEntity {
  constructor(createdBy: string, createdDate: Date, name: string, year: string, winnerId: UUID, description: string) {
    super(createdBy, createdDate);
    this.name = name;
    this.year = year;
    this.winnerId = winnerId;
    this.description = description;
  }
  name: string;
  year: string;
  winnerId: UUID;
  description: string;
}
