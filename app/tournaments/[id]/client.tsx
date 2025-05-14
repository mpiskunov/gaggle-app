"use client";

import { TournamentDTO } from "@/models/dtos/tournaments";

interface PageProps {
  tournament: TournamentDTO | null;
}
const TournamentClientPage = ({ tournament }: PageProps) => {
  return (
    <>
      <pre>{JSON.stringify(tournament, null, 2)}</pre>
    </>
  );
};

export default TournamentClientPage;
