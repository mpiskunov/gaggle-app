import { BaseEntity, UUID } from "./base-entity";

export class Tournament extends BaseEntity {
  constructor(
    createdBy: string,
    createdDate: Date,
    name: string,
    year: string,
    winnerId: UUID,
    description: string,
    code: string,
    isPublished: boolean
  ) {
    super(createdBy, createdDate);
    this.name = name;
    this.year = year;
    this.winnerId = winnerId;
    this.description = description;
    this.code = code;
    this.isPublished = isPublished;
  }
  name: string;
  year: string;
  winnerId: UUID;
  description: string;
  code: string;
  isPublished: boolean;
}
