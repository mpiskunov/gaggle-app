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

const rows = [createData(488, "Jake Eknaian", 1)];

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
