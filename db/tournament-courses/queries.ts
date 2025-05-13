import { TournamentCourseDTO } from "@/models/dtos/tournament-courses";
import { query } from "..";
import { UUID } from "@/models/db/base-entity";

const GetTournamentCourseById = async (id: UUID): Promise<TournamentCourseDTO | null> => {
  try {
    const params: any[] = [id];
    const text = `
      SELECT * 
      FROM public.tournament_courses
      WHERE id = $1
    `;

    const result = await query(text, params);
    if (result.rowCount === 0) return null;
    const item = result.rows[0];
    const dto: TournamentCourseDTO = {
      id: item["id"],
      courseId: item["course_id"],
      isDeleted: item["is_deleted"],
      tournamentId: item["tournament_id"],
      order: item["order"],
    };
    return dto;
  } catch (error: any) {
    console.error(`Error getting TournamentCourse: ${id}`, error);
    return null;
  }
};

const GetAllTournamentCourses = async ({ includeDeleted = false } = {}): Promise<TournamentCourseDTO[] | []> => {
  try {
    const params: any[] = [includeDeleted];
    const text = `
      SELECT * 
      FROM public.tournament_courses
      WHERE is_deleted = FALSE 
      OR (is_deleted = TRUE AND $1 = TRUE);
    `;
    const result = await query(text, params);

    if (result.rowCount == 0) return [];

    const list: TournamentCourseDTO[] = result.rows.map((item) => {
      return {
        id: item["id"],
        courseId: item["course_id"],
        isDeleted: item["is_deleted"],
        tournamentId: item["tournament_id"],
        order: item["order"],
      };
    });
    return list;
  } catch (error: any) {
    console.error(`Error getting all TournamentCourses.`, error);
    return [];
  }
};

export { GetTournamentCourseById, GetAllTournamentCourses };
