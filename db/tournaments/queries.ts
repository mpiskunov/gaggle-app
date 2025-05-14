import { FullTournamentInfoDTO, TournamentDTO } from "@/models/dtos/tournaments";
import { query } from "..";
import { UUID } from "@/models/db/base-entity";

const GetTournamentById = async (id: UUID): Promise<TournamentDTO | null> => {
  try {
    const params: any[] = [id];
    const text = `
      SELECT * 
      FROM public.tournaments
      WHERE id = $1
    `;

    const result = await query(text, params);
    if (result.rowCount === 0) return null;
    const item = result.rows[0];
    const dto: TournamentDTO = {
      id: item["id"],
      isDeleted: item["is_deleted"],
      name: item["name"],
      year: item["year"],
      description: item["description"],
      winnerId: item["winner_id"],
      code: item["code"],
    };
    return dto;
  } catch (error: any) {
    console.error(`Error getting Tournament: ${id}`, error);
    return null;
  }
};

const GetAllTournaments = async ({ includeDeleted = false } = {}): Promise<TournamentDTO[] | []> => {
  try {
    const params: any[] = [includeDeleted];
    const text = `
      SELECT * 
      FROM public.tournaments
      WHERE is_deleted = FALSE 
      OR (is_deleted = TRUE AND $1 = TRUE);
    `;
    const result = await query(text, params);

    if (result.rowCount == 0) return [];

    const list: TournamentDTO[] = result.rows.map((item) => {
      return {
        id: item["id"],
        isDeleted: item["is_deleted"],
        name: item["name"],
        year: item["year"],
        description: item["description"],
        winnerId: item["winner_id"],
        code: item["code"],
      };
    });
    return list;
  } catch (error: any) {
    console.error(`Error getting all Tournaments.`, error);
    return [];
  }
};

const GetTournamentsByUserExternalId = async (externalId: string): Promise<TournamentDTO[]> => {
  try {
    const params: any[] = [externalId];
    const text = `
      SELECT tor.* 
      FROM public.tournaments tor
      INNER JOIN public.tournament_commissioners toco ON tor.id = toco.tournament_id
      INNER JOIN public.gaggle_users ga ON toco.user_id = ga.id
      WHERE ga.external_user_id = $1
    `;

    const result = await query(text, params);
    if (result.rowCount === 0) return [];
    const list: TournamentDTO[] = result.rows.map((item) => {
      return {
        id: item["id"],
        isDeleted: item["is_deleted"],
        name: item["name"],
        year: item["year"],
        description: item["description"],
        winnerId: item["winner_id"],
        code: item["code"],
      };
    });
    return list;
  } catch (error: any) {
    console.error(`Error getting Tournaments.`, error);
    return [];
  }
};

const GetAllActiveTournamentInfoById = async (id: UUID): Promise<FullTournamentInfoDTO | null> => {
  try {
    const params: any[] = [id];
    const tocoQuery = `
      SELECT 
      tour.id AS t_id, tour.name AS t_name, tour.code AS t_code, tour.year AS t_year,
      tour.description AS t_description, tour.winner_id AS tournament_winner_id,
      co.id AS c_id, co.name AS c_name, co.address AS c_address, co.description AS c_description, 
      tc.id, tc.winner_id AS tournament_course_winner_id, tc.order,
      tcr.course_round_number, tcr.tournament_round_number, tcr.number_of_holes, tcr.start_date, tcr.end_date
      FROM public.tournament_course_rounds tcr
      INNER JOIN public.tournament_courses tc ON tc.id = tcr.tournament_course_id AND tc.is_deleted = false
      INNER JOIN public.courses co ON co.id = tc.course_id AND co.is_deleted = false
      INNER JOIN public.tournaments tour ON tour.id = tc.tournament_id AND tour.is_deleted = false
      WHERE tour.id = $1
      AND tcr.is_deleted = false
      ORDER BY tc.order, tcr.course_round_number;
    `;
    const tocoResult = await query(tocoQuery, params);
    if (tocoResult.rowCount == 0) return null;

    let courseList = tocoResult.rows
      .map((item) => {
        return { id: item["c_id"], name: item["c_name"], address: item["c_address"], description: item["c_description"] };
      })
      .filter((obj, index, self) => index === self.findIndex((t) => t.id === obj.id));

    let courseRoundList = tocoResult.rows.map((item) => {
      return {
        courseId: item["c_id"],
        courseRoundNumber: item["course_round_number"],
        numberOfHoles: item["number_of_holes"],
        tournamentRoundNumber: item["tournament_round_number"],
      };
    });

    let userQuery = `
      SELECT 
      ga.id, 
      ga.email,
      concat(ga.first_name, ' ', ga.last_name) AS full_name,
      tcomm.id AS commissioner_id, 
      tp.id AS participant_id
      FROM public.gaggle_users ga
      LEFT JOIN public.tournament_commissioners tcomm ON tcomm.user_id = ga.id AND tcomm.is_deleted = false
      LEFT JOIN public.tournament_participants tp ON tp.user_id = ga.id AND tp.is_deleted = false
      WHERE 
      ga.is_deleted = false AND
      (tcomm.tournament_id = $1 OR tp.tournament_id = $1)
    `;

    const userResult = await query(userQuery, params);
    const pList = userResult.rows
      .map((item: { [x: string]: any }) => {
        return { id: item["participant_id"], userId: item["id"], name: item["full_name"] };
      })
      .filter((obj) => obj.id !== null);

    const commList = userResult.rows
      .map((item: { [x: string]: any }) => {
        return { id: item["commissioner_id"], userId: item["id"], name: item["full_name"] };
      })
      .filter((obj) => obj.id !== null);

    const dto: FullTournamentInfoDTO = {
      id: tocoResult.rows[0]["t_id"],
      name: tocoResult.rows[0]["t_name"],
      year: tocoResult.rows[0]["t_year"],
      description: tocoResult.rows[0]["t_description"],
      code: tocoResult.rows[0]["t_code"],
      courseRounds: courseRoundList,
      courses: courseList,
      participants: pList,
      commissioners: commList,
    };
    return dto;
  } catch (error: any) {
    console.error(`Error getting Tournaments.`, error);
    return null;
  }
};

export { GetTournamentById, GetAllTournaments, GetTournamentsByUserExternalId, GetAllActiveTournamentInfoById };
