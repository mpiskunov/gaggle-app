import { TournamentCourseRoundDTO } from "@/models/dtos/tournament-course-rounds";
import { query } from "..";
import { UUID } from "@/models/db/base-entity";

const GetTournamentCourseRoundById = async (id: UUID): Promise<TournamentCourseRoundDTO | null> => {
  try {
    const params: any[] = [id];
    const text = `
      SELECT * 
      FROM public.tournament_course_rounds
      WHERE id = $1
    `;

    const result = await query(text, params);
    if (result.rowCount === 0) return null;
    const item = result.rows[0];
    const dto: TournamentCourseRoundDTO = {
      id: item["id"],
      courseId: item["course_id"],
      tournamentCourseId: item["tournament_course_id"],
      courseRoundNumber: item["course_round_number"],
      numberOfHoles: item["number_of_holes"],
      tournamentRoundNumber: item["tournament_round_number"],
      startDate: item["start_date"],
      endDate: item["end_date"],
      isDeleted: item["is_deleted"],
      tournamentId: item["tournament_id"],
    };
    return dto;
  } catch (error: any) {
    console.error(`Error getting TournamentCourseRound: ${id}`, error);
    return null;
  }
};

const GetAllTournamentCourseRounds = async ({ includeDeleted = false } = {}): Promise<TournamentCourseRoundDTO[] | []> => {
  try {
    const params: any[] = [includeDeleted];
    const text = `
      SELECT * 
      FROM public.tournament_course_rounds
      WHERE is_deleted = FALSE 
      OR (is_deleted = TRUE AND $1 = TRUE);
    `;
    const result = await query(text, params);

    if (result.rowCount == 0) return [];

    const list: TournamentCourseRoundDTO[] = result.rows.map((item) => {
      return {
        id: item["id"],
        courseId: item["course_id"],
        tournamentCourseId: item["tournament_course_id"],
        tournamentId: item["tournament_id"],
        courseRoundNumber: item["course_round_number"],
        numberOfHoles: item["number_of_holes"],
        tournamentRoundNumber: item["tournament_round_number"],
        startDate: item["start_date"],
        endDate: item["end_date"],
        isDeleted: item["is_deleted"],
      };
    });
    return list;
  } catch (error: any) {
    console.error(`Error getting all TournamentCourseRounds.`, error);
    return [];
  }
};

export { GetTournamentCourseRoundById, GetAllTournamentCourseRounds };
