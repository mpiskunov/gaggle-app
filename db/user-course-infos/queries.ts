import { UserCourseInfoDTO } from "@/models/dtos/user-course-infos";
import { query } from "..";
import { UUID } from "@/models/db/base-entity";

const GetUserCourseInfoById = async (id: UUID): Promise<UserCourseInfoDTO | null> => {
  try {
    const params: any[] = [id];
    const text = `
      SELECT * 
      FROM public.user_course_infos
      WHERE id = $1
    `;

    const result = await query(text, params);
    if (result.rowCount === 0) return null;
    const item = result.rows[0];
    const dto: UserCourseInfoDTO = {
      id: item["id"],
      isDeleted: item["is_deleted"],
      userId: item["user_id"],
      courseId: item["course_id"],
      handicap: item["handicap"],
      isPublished: item["is_published"],
    };
    return dto;
  } catch (error: any) {
    console.error(`Error getting UserCourseInfo: ${id}`, error);
    return null;
  }
};

const GetAllUserCourseInfos = async ({ includeDeleted = false } = {}): Promise<UserCourseInfoDTO[] | []> => {
  try {
    const params: any[] = [includeDeleted];
    const text = `
      SELECT * 
      FROM public.user_course_infos
      WHERE is_deleted = FALSE 
      OR (is_deleted = TRUE AND $1 = TRUE);
    `;
    const result = await query(text, params);

    if (result.rowCount == 0) return [];

    const list: UserCourseInfoDTO[] = result.rows.map((item) => {
      return {
        id: item["id"],
        isDeleted: item["is_deleted"],
        userId: item["user_id"],
        courseId: item["course_id"],
        handicap: item["handicap"],
        isPublished: item["is_published"],
      };
    });
    return list;
  } catch (error: any) {
    console.error(`Error getting all UserCourseInfos.`, error);
    return [];
  }
};

export { GetUserCourseInfoById, GetAllUserCourseInfos };
