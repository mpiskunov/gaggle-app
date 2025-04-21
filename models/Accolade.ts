import { BaseEntity } from "./BaseEntity";

export class Accolade extends BaseEntity {
  constructor(createdBy: string, createdDate: Date, name: string, description: string, value: number) {
    super(createdBy, createdDate);
    this.name = name;
    this.description = description;
    this.value = value;
  }
  name: string;
  description: string;
  value: number;
}
