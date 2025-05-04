import { TournamentCourseRoundDTO } from "@/models/dtos/tournament-course-round";
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
    const accolade: TournamentCourseRoundDTO = {
      id: item["id"],
      courseId: item["courseId"],
      tournamentCourseId: item["tournamentCourseId"],
      courseRoundNumber: item["courseRoundNumber"],
      numberOfHoles: item["numberOfHoles"],
      tournamentRoundNumber: item["tournamentRoundNumber"],
      startDate: item["startDate"],
      endDate: item["endDate"],
      penaltyDate: item["penaltyDate"],
      isDeleted: item["isDeleted"],
    };
    return accolade;
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
        courseId: item["courseId"],
        tournamentCourseId: item["tournamentCourseId"],
        courseRoundNumber: item["courseRoundNumber"],
        numberOfHoles: item["numberOfHoles"],
        tournamentRoundNumber: item["tournamentRoundNumber"],
        startDate: item["startDate"],
        endDate: item["endDate"],
        penaltyDate: item["penaltyDate"],
        isDeleted: item["isDeleted"],
      };
    });
    return list;
  } catch (error: any) {
    console.error(`Error getting all TournamentCourseRounds.`, error);
    return [];
  }
};

export { GetTournamentCourseRoundById, GetAllTournamentCourseRounds };
