import { UserRoundInfoDTO } from "@/models/dtos/user-round-infos";
import { query } from "..";
import { UUID } from "@/models/db/base-entity";

const GetUserRoundInfoById = async (id: UUID): Promise<UserRoundInfoDTO | null> => {
  try {
    const params: any[] = [id];
    const text = `
      SELECT * 
      FROM public.user_round_infos
      WHERE id = $1
    `;

    const result = await query(text, params);
    if (result.rowCount === 0) return null;
    const item = result.rows[0];
    const dto: UserRoundInfoDTO = {
      id: item["id"],
      isDeleted: item["is_deleted"],
      userId: item["user_id"],
      tournamentCourseRoundId: item["tournament_course_round_id"],
      grossStrokes: item["gross_strokes"],
      isPublished: item["is_published"],
    };
    return dto;
  } catch (error: any) {
    console.error(`Error getting UserRoundInfo: ${id}`, error);
    return null;
  }
};

const GetAllUserRoundInfos = async ({ includeDeleted = false } = {}): Promise<UserRoundInfoDTO[] | []> => {
  try {
    const params: any[] = [includeDeleted];
    const text = `
      SELECT * 
      FROM public.user_round_infos
      WHERE is_deleted = FALSE 
      OR (is_deleted = TRUE AND $1 = TRUE);
    `;
    const result = await query(text, params);

    if (result.rowCount == 0) return [];

    const list: UserRoundInfoDTO[] = result.rows.map((item) => {
      return {
        id: item["id"],
        isDeleted: item["is_deleted"],
        userId: item["user_id"],
        tournamentCourseRoundId: item["tournament_course_round_id"],
        grossStrokes: item["gross_strokes"],
        isPublished: item["is_published"],
      };
    });
    return list;
  } catch (error: any) {
    console.error(`Error getting all UserRoundInfos.`, error);
    return [];
  }
};

export { GetUserRoundInfoById, GetAllUserRoundInfos };
