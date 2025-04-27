import { BaseEntity } from "./base-entity";

export class Course extends BaseEntity {
  constructor(createdBy: string, createdDate: Date, name: string, description: string, address: string) {
    super(createdBy, createdDate);
    this.name = name;
    this.description = description;
    this.address = address;
  }
  name: string;
  description: string;
  address: string;
}
