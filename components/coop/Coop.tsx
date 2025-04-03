import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Icon, Typography } from "@mui/material";
import Image from "next/image";

const createData = (firstNameLastInitial: string) => {
  return { firstNameLastInitial };
};

const rows = [createData("Jake E."), createData("Matt P."), createData("Ed L."), createData("Pual E.")];
const CoopTable = () => {
  return (
    <>
      <Paper sx={{ backgroundImage: "url(/bg/gaggle-bg2.png)" }}>
        <div style={{ justifyContent: "center", display: "inline-flex" }}>
          <Image src={"/headers/CoupedUpCropped.png"} height={300} width={300} alt="couped up" />
        </div>

        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 150 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography>
                    <b>GAGGLER</b>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    <b>USERNAME</b>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    <b>ICON</b>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 }, "&:hover": { backgroundColor: "primary.light" } }}>
                  <TableCell component="th" scope="row">
                    {row.firstNameLastInitial}
                  </TableCell>
                  <TableCell>mpiskunov</TableCell>
                  <TableCell>:)</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
};

export default CoopTable;
