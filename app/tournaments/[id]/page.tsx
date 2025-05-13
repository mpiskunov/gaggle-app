import { GetTournamentById } from "@/db/tournaments/queries";
import TournamentClientPage from "./client";

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  // dont forget to do security checks here
  const { id } = await params;
  const tournament = await GetTournamentById(id);

  if (tournament !== null)
    return (
      <>
        <TournamentClientPage tournament={tournament} />
      </>
    );
  return <h1>loading</h1>;
};

export default Page;
