import { CourseDTO } from "@/models/dtos/courses";
import { query } from "..";
import { UUID } from "@/models/db/base-entity";

const GetCourseById = async (id: UUID): Promise<CourseDTO | null> => {
  try {
    const params: any[] = [id];
    const text = `
      SELECT * 
      FROM public.courses
      WHERE id = $1
    `;

    const result = await query(text, params);
    if (result.rowCount === 0) return null;
    const item = result.rows[0];
    const accolade: CourseDTO = {
      id: item["id"],
      name: item["name"],
      description: item["description"],
      address: item["address"],
      isDeleted: item["is_deleted"],
    };
    return accolade;
  } catch (error: any) {
    console.error(`Error getting Course: ${id}`, error);
    return null;
  }
};

const GetAllCourses = async ({ includeDeleted = false } = {}): Promise<CourseDTO[] | []> => {
  try {
    const params: any[] = [includeDeleted];
    const text = `
    SELECT * 
    FROM public.courses
    WHERE is_deleted = FALSE 
    OR (is_deleted = TRUE AND $1 = TRUE);
  `;
    const result = await query(text, params);

    if (result.rowCount == 0) return [];

    const list: CourseDTO[] = result.rows.map((item) => {
      return {
        id: item["id"],
        name: item["name"],
        description: item["description"],
        address: item["address"],
        isDeleted: item["is_deleted"],
      };
    });
    return list;
  } catch (error: any) {
    console.error(`Error getting all Courses.`, error);
    return [];
  }
};

export { GetCourseById, GetAllCourses };
