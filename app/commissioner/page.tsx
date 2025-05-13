import { Paper, Grid, Typography, IconButton, Container, Button } from "@mui/material";

export default async function Page() {
  return (
    <>
      <Grid container mt={3} spacing={2} alignItems={"center"} justifyContent={"center"}>
        <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
          <Button variant="contained" sx={{ width: "100%" }} href="/commissioner/tournaments">
            <strong style={{ fontSize: "1.5rem" }}>Tournaments</strong>
          </Button>
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} display={"flex"} justifyContent={"center"}>
          <Button variant="contained" sx={{ width: "100%" }}>
            <strong style={{ fontSize: "1.5rem" }}>Accolades</strong>
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
