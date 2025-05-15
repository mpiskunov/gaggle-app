"use client";

import { TournamentDTO } from "@/models/dtos/tournaments";
import { Container, Grid } from "@mui/material";

interface PageProps {
  tournament: TournamentDTO | null;
}
const TournamentClientPage = ({ tournament }: PageProps) => {
  return (
    <>
      <Container fixed maxWidth="lg">
        <Grid container mt={3} spacing={2} alignItems={"center"} justifyContent={"center"} border={"1px solid black"}>
          <Grid size={{ xs: 12, md: 4 }} border={"1px solid red"}></Grid>
        </Grid>
      </Container>
      <pre>{JSON.stringify(tournament, null, 2)}</pre>
    </>
  );
};

export default TournamentClientPage;
