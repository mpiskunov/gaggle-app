import { BaseEntity, UUID } from "./BaseEntity";
import * as EmailValidator from "email-validator";

class GaggleUser extends BaseEntity {
  constructor(createdBy: string, createdDate: Date, firstName: string, lastName: string, username: string, email: string, externalUserId: string) {
    super(createdBy, createdDate);
    if (!EmailValidator.validate(email)) {
      throw new Error("Invalid email supplied.");
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.email = email;
    this.externalUserId = externalUserId;
  }
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  externalUserId: UUID; //uuid from authentik
}
