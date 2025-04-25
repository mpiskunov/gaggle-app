import { BaseEntity } from "./BaseEntity";
import * as EmailValidator from "email-validator";

export class GaggleUser extends BaseEntity {
  constructor(createdBy: string, createdDate: Date, firstName: string, lastName: string, email: string, externalUserId: string) {
    super(createdBy, createdDate);
    if (!EmailValidator.validate(email)) {
      throw new Error("Invalid email supplied.");
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.externalUserId = externalUserId;
  }
  firstName: string;
  lastName: string;
  email: string;
  externalUserId: string; // from authentik
}
