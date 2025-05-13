import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { auth } from "@/auth";
import { GetAllAccolades } from "@/db/accolades/queries";



const AccoladesPage = async () => {
    const session = await auth();
    console.log("session", session);

    if (!session) {
        return <h1>YOU ARE NOT AUTHENTICATED. PAGE IS BLOCKED.</h1>;
      }

    const accolades = await GetAllAccolades({includeDeleted: false });

    return (
      <>
        <h1
            style={{
                backgroundColor: "#fff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
                borderRadius: "4px",
                padding: "16px",

                display: "block",
                width: "fit-content",
                margin: "32px auto 24px",

                textAlign: "center",
                fontSize: "2rem",
                fontWeight: 500,
                letterSpacing: "0.5px",

            }}
        >   
            Welcome to the accolades page!
        </h1>
    
        <TableContainer 
            component={Paper} 
            sx={{ 
                mt: 4, 
                maxWidth: 1400,
                width: "100%",
                mx: "auto",

            }}
            >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell align="right">Value</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {accolades.length == 0 ? (
                        <TableRow>
                            <TableCell colSpan={3} align="center">
                                No active accolades found.
                            </TableCell>
                        </TableRow>
                    ) : (
                        accolades.map((acc) => (
                            <TableRow key={acc.id}>
                                <TableCell component="th" scope="row">
                                    {acc.name}
                                </TableCell>
                                <TableCell>{acc.description}</TableCell>
                                <TableCell align="right">{acc.value}</TableCell>
                            </TableRow>
                        ))
                    )}
                </TableBody>
            </Table>
        </TableContainer>
      </>
    );
  };

  export default AccoladesPage;