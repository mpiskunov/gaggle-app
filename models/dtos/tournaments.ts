import { UUID } from "../db/base-entity";

export interface CreateTournamentDTO {
  name: string;
  year: string;
  description: string;
  code: string;
  isPublished: boolean;
  createdBy: UUID;
}

export interface GetTournamentByIdDTO {
  id: UUID;
}

export interface UpdateTournamentByIdDTO {
  id: UUID;
  name?: string;
  year?: string;
  description?: string;
  winnerId?: UUID;
  code?: string;
  isPublished?: boolean;
  isDeleted?: boolean;
  updatedBy: UUID;
}

export interface TournamentDTO {
  id: UUID;
  name: string;
  year: string;
  description: string;
  winnerId: UUID;
  code: string;
  isPublished: boolean;
  isDeleted: boolean;
}

export interface ActiveTournamentInfoDTO {
  id: UUID;
  name: string;
  year: string;
  description: string;
  winnerId?: UUID;
  code: string;
  isPublished: boolean;
  courses: { id: UUID; name: string; address: string; description: string }[];
  participants: { id: UUID; userId: UUID; name: string; email: string }[];
  commissioners: { id: UUID; userId: UUID; name: string; email: string; isCoCommissioner: boolean }[];
  courseRounds: { courseId: UUID; courseRoundNumber: number; numberOfHoles: number; tournamentRoundNumber: number }[];
}
