"use client";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TournamentDTO } from "@/models/dtos/tournaments";
import { Container, Link } from "@mui/material";

interface ClientPageProps {
  tournaments: TournamentDTO[];
}

const CommissionerTournamentClientPage = ({ tournaments }: ClientPageProps) => {
  return (
    <>
      <Container maxWidth={"lg"} sx={{ pt: 3 }}>
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
            <TableBody>
              {tournaments.map((row) => (
                <TableRow key={row.name} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    <Link href={`/tournaments/${row.id}`}>{row.code}</Link>
                  </TableCell>
                  <TableCell align="left">{row.code}</TableCell>
                  <TableCell align="left">{row.year}</TableCell>
                  <TableCell align="left">{row.description}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default CommissionerTournamentClientPage;
