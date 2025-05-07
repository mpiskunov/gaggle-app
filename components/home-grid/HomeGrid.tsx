import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import Image from "next/image";

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
    <>
      <Paper sx={{ backgroundImage: "url(/bg/gaggle-bg2.png)" }}>
        <div style={{ justifyContent: "center", display: "inline-flex" }}>
          <Image src={"/headers/pecking_order_cropped.png"} height={300} width={300} alt="couped up" />
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 150 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Typography>
                    <b>NET TOTAL</b>
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography>
                    <b>GAGGLER</b>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography>
                    <b>FLOCK</b>
                  </Typography>
                </TableCell>
                <TableCell align="right">
                  <Typography>
                    <b>ACCOLADES</b>
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                  <TableCell component="th" scope="row">
                    {row.netTotal}
                  </TableCell>
                  <TableCell>{row.gaggler}</TableCell>
                  <TableCell align="right">{Array.from({ length: row.flockNumber }, (_, i) => "I ")}</TableCell>
                  <TableCell align="right">Award!</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </>
  );
}
