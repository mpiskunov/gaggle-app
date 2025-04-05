import { v4 as uuidv4, validate as uuidValidate } from "uuid";
export type UUID = string;

export class BaseEntity {
  constructor(createdBy: UUID, createdDate: Date) {
    this.id = uuidv4();
    if (!uuidValidate(createdBy)) {
      throw new Error(`Invalid "createdBy" UUID: ${createdBy}.`);
    }
    this.createdBy = createdBy;
    this.updatedBy = null;
    this.createdDate = createdDate;
    this.updatedDate = null;
    this.isDeleted = false;
  }
  id: UUID;
  createdBy: string;
  updatedBy: string | null;
  createdDate: Date;
  updatedDate: Date | null;
  isDeleted: boolean;
}
