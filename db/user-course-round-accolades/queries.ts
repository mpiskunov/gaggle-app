import { UserCourseRoundAccoladeDTO } from "@/models/dtos/user-course-round-accolades";
import { query } from "..";
import { UUID } from "@/models/db/base-entity";

const GetUserCourseRoundAccoladeById = async (id: UUID): Promise<UserCourseRoundAccoladeDTO | null> => {
  try {
    const params: any[] = [id];
    const text = `
      SELECT * 
      FROM public.user_course_round_accolades
      WHERE id = $1
    `;

    const result = await query(text, params);
    if (result.rowCount === 0) return null;
    const item = result.rows[0];
    const dto: UserCourseRoundAccoladeDTO = {
      id: item["id"],
      isDeleted: item["is_deleted"],
      userId: item["user_id"],
      tournamentCourseRoundId: item["tournament_course_round_id"],
      accoladeId: item["accolade_id"],
      count: item["count"],
      isPublished: item["is_published"],
    };
    return dto;
  } catch (error: any) {
    console.error(`Error getting UserCourseRoundAccolade: ${id}`, error);
    return null;
  }
};

const GetAllUserCourseRoundAccolades = async ({ includeDeleted = false } = {}): Promise<UserCourseRoundAccoladeDTO[] | []> => {
  try {
    const params: any[] = [includeDeleted];
    const text = `
      SELECT * 
      FROM public.user_course_round_accolades
      WHERE is_deleted = FALSE 
      OR (is_deleted = TRUE AND $1 = TRUE);
    `;
    const result = await query(text, params);

    if (result.rowCount == 0) return [];

    const list: UserCourseRoundAccoladeDTO[] = result.rows.map((item) => {
      return {
        id: item["id"],
        isDeleted: item["is_deleted"],
        userId: item["user_id"],
        tournamentCourseRoundId: item["tournament_course_round_id"],
        accoladeId: item["accolade_id"],
        count: item["count"],
        isPublished: item["is_published"],
      };
    });
    return list;
  } catch (error: any) {
    console.error(`Error getting all UserCourseRoundAccolades.`, error);
    return [];
  }
};

export { GetUserCourseRoundAccoladeById, GetAllUserCourseRoundAccolades };
