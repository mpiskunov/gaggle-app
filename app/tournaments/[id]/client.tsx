"use client";

import { TournamentDTO } from "@/models/dtos/tournaments";

interface PageProps {
  tournament: TournamentDTO | null;
}
const TournamentClientPage = ({ tournament }: PageProps) => {
  if (tournament !== null)
    return (
      <>
        <pre>{JSON.stringify(tournament, null, 2)}</pre>
      </>
    );
  else return <p>no tournies</p>;
};

export default TournamentClientPage;
