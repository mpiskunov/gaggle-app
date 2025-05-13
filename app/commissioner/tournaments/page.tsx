import { auth } from "@/auth";
import { GetTournamentsByUserExternalId } from "@/db/tournaments/queries";
import CommissionerTournamentClientPage from "./tournaments-client";

const Page = async () => {
  const session = await auth();
  const tournaments = await GetTournamentsByUserExternalId(session?.external_id!);

  if (!session || !session.groups.includes("gaggle_admin"))
    // MAKE THIS RETURN A DEFAULT NOT ALLOWED PAGE.
    return (
      <>
        <h1>YOU ARE NOT ALLOWED TO VIEW THIS PAGE</h1>
      </>
    );

  return (
    <>
      <CommissionerTournamentClientPage tournaments={tournaments} />
    </>
  );
};

export default Page;
