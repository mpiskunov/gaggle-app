import { GetAllActiveTournamentInfoById, GetTournamentsByUserExternalId } from "@/db/tournaments/queries";
import TournamentClientPage from "./client";
import { auth } from "@/auth";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  // dont forget to do security checks here
  const { id } = await params;
  const session = await auth();
  if (!session || !session.groups.includes("gaggle_admin"))
    // MAKE THIS RETURN A DEFAULT NOT ALLOWED PAGE.
    return (
      <>
        <h1>YOU ARE NOT ALLOWED TO VIEW THIS PAGE</h1>
      </>
    );

  const tournament = await GetAllActiveTournamentInfoById(id);

  if (tournament !== null)
    return (
      <>
        {/* <pre>{JSON.stringify(tournament, null, 2)}</pre> */}
        <TournamentClientPage tournament={tournament} />
      </>
    );
  return <h1>loading</h1>;
};

export default Page;
