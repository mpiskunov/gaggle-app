import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";

function createData(netTotal: number, gaggler: string, flockNumber: number) {
  return { netTotal, gaggler, flockNumber };
}

const rows = [
  createData(426, "Ed Leja", 1),
  createData(430, "Corey Leja", 0),
  createData(438, "Mike Eknaian", 1),
  createData(441, "Paul Carlson", 5),
  createData(447, "Kendra Peneda", 1),
  createData(458, "Gavin Picard", 7),
  createData(463, "Camden Harrigan", 1),
  createData(465, "Dave Kwasny", 2),
  createData(470, "Jose Peneda", 1),
  createData(478, "Bill Harrigan", 2),
  createData(484, "Cindy Carlson", 1),
  createData(488, "Jake Eknaian", 1),
  createData(491, "Eric Lecuyer", 0),
  createData(539, "Chris Pawlina", 0),
  createData(562, "Doug Mann", 1),
  createData(579, "Katie Mahr", 0),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Typography variant="h5">PECKING ORDER</Typography>
            </TableCell>
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
          <TableRow>
            <TableCell>NET TOTAL</TableCell>
            <TableCell align="right">GAGGLER</TableCell>
            <TableCell align="right">FLOCK</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.netTotal}
              </TableCell>
              <TableCell align="right">{row.gaggler}</TableCell>
              <TableCell align="right">{Array.from({ length: row.flockNumber }, (_, i) => "I ")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
