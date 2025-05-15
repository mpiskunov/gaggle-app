import * as React from "react";
import {
  Container, Grid, Paper, Typography,
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  IconButton, Button,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import Link from "next/link";

import { auth } from "@/auth";
import { GetAllAccolades }          from "@/db/accolades/queries";
import { UpdateAccolade }           from "@/db/accolades/commands";
import { GetUserByExternalId }      from "@/db/gaggle_users/queries";
import { revalidatePath }           from "next/cache";
import { redirect }                 from "next/navigation";

export const dynamic = "force-dynamic";

async function uuidFromSession(session: any): Promise<string> {
  const row = await GetUserByExternalId(session.external_id as string);
  if (!row) throw new Error("User missing in gaggle_users");
  return row.id;
}

/* MIGHT BE WRONG. Ask Matt */
export async function softDeleteAccolade(form: FormData) {
  "use server";
  const session = await auth();
  const userId  = await uuidFromSession(session);

  await UpdateAccolade({
    id:        form.get("id") as string,
    isDeleted: true,
    updatedBy: userId,
  });
  revalidatePath("/commissioner/accolades");
  redirect("/commissioner/accolades");
}

const AccoladesPage = async () => {
  const session = await auth();
  if (!session || !session.groups?.includes("gaggle_admin"))
    return (
      <Container sx={{ mt: 8 }}>
        <Typography variant="h5" align="center">
          YOU ARE NOT ALLOWED TO VIEW THIS PAGE
        </Typography>
      </Container>
    );

  const accolades = await GetAllAccolades({ includeDeleted: false });

  return (
    <Container maxWidth="lg" fixed>
      <Paper elevation={10} sx={{ mt: 4, p: 3 }}>
        {/* header */}
        <Grid container alignItems="center" sx={{ mb: 2 }}>
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h4">Accolades</Typography>
          </Grid>
          <Grid
            size={{ xs: 12, md: 4 }}
            sx={{ display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}
          >
            <Button
              component={Link}
              href="/commissioner/accolades/new"
              variant="contained"
              startIcon={<AddIcon />}
            >
              Create
            </Button>
          </Grid>
        </Grid>

        {/* table */}
        <TableContainer>
          <Table
            sx={{
                "& th, & td": {
                    borderRight: 1,
                    borderColor: "divider",
                },
                "& th:last-of-type, td:last-of-type": {
                    borderRight: 0,
                }
            }}
          
          >
            <TableHead>
              <TableRow sx={{ bgcolor: "grey.200"}}>
                <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 600 }}>Description</TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="right">Value</TableCell>
                <TableCell sx={{ fontWeight: 600 }} align="right" width={120}>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {accolades.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={4} align="center">
                    No active accolades found.
                  </TableCell>
                </TableRow>
              ) : (
                accolades.map((acc) => (
                  <TableRow key={acc.id} hover>
                    <TableCell>{acc.name}</TableCell>
                    <TableCell>{acc.description}</TableCell>
                    <TableCell align="right">{acc.value}</TableCell>
                    <TableCell align="right">
                      {/* EDIT navigates to form */}
                      <IconButton
                        component={Link}
                        href={`/commissioner/accolades/${acc.id}/edit`}
                        aria-label="edit"
                      >
                        <EditIcon />
                      </IconButton>

                      {/* DELETE (soft) */}
                      <form action={softDeleteAccolade} style={{ display: "inline" }}>
                        <input type="hidden" name="id" value={acc.id} />
                        <IconButton type="submit" aria-label="delete">
                          <DeleteIcon />
                        </IconButton>
                      </form>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Container>
  );
};

export default AccoladesPage;
