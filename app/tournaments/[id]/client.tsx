"use client";

import { ActiveTournamentInfoDTO } from "@/models/dtos/tournaments";
import { Box, Container, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

interface PageProps {
  tournament: ActiveTournamentInfoDTO | null;
}
const TournamentClientPage = ({ tournament }: PageProps) => {
  // console.log(tournament?.courseRounds.map((coro) => coro.courseRoundNumber).join("/"));
  return (
    <>
      {tournament && (
        <Container fixed maxWidth="lg">
          <Box sx={{ display: "flex" }} pt={3} alignItems={"flex-end"} justifyContent={"space-between"} borderBottom={"1px solid black"}>
            <Typography variant="h2">{tournament.name}</Typography>
            <Typography variant={"h6"} ml={2}>
              {tournament.year}
            </Typography>
          </Box>

          <Grid container mt={3} spacing={2} alignItems={"center"} justifyContent={"center"}>
            <Grid size={{ xs: 12 }}>
              <TableContainer component={Paper}>
                <Table size="medium" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Course</strong>
                      </TableCell>
                      <TableCell align="left">
                        <strong>Address</strong>
                      </TableCell>
                      <TableCell align="left">
                        <strong># of Rounds</strong>
                      </TableCell>
                      <TableCell align="left">
                        <strong>Holes</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {tournament.courses.map((item, index) => (
                      <TableRow key={index}>
                        <TableCell>{item.name}</TableCell>
                        <TableCell>{item.address}</TableCell>
                        <TableCell>{tournament.courseRounds.filter((coRound) => coRound.courseId == item.id).length}</TableCell>
                        <TableCell>
                          {tournament.courseRounds
                            .filter((coRound) => coRound.courseId == item.id)
                            .map((x) => x.numberOfHoles)
                            .join("/")}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} border={"1px solid red"}>
              <TableContainer component={Paper}>
                <Table size="medium" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Name</strong>
                      </TableCell>
                      <TableCell align="left">
                        <strong>Code</strong>
                      </TableCell>
                      <TableCell align="left">
                        <strong>Year</strong>
                      </TableCell>
                      <TableCell align="left">
                        <strong>Description</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
              </TableContainer>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }} border={"1px solid red"}>
              <TableContainer component={Paper}>
                <Table size="medium" aria-label="a dense table">
                  <TableHead>
                    <TableRow>
                      <TableCell>
                        <strong>Name</strong>
                      </TableCell>
                      <TableCell align="left">
                        <strong>Code</strong>
                      </TableCell>
                      <TableCell align="left">
                        <strong>Year</strong>
                      </TableCell>
                      <TableCell align="left">
                        <strong>Description</strong>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody></TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        </Container>
      )}
      {/* <pre>{JSON.stringify(tournament, null, 2)}</pre> */}
    </>
  );
};

export default TournamentClientPage;
