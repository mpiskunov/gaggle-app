import { UUID } from "../db/BaseEntity";

export interface GaggleUserDTO {
  id: UUID;
  firstName: string;
  lastName: string;
  email: string;
}
