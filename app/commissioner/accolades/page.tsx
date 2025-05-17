/* ────────────────────────────────────────────────────────────────
   app/commissioner/accolades/page.tsx
──────────────────────────────────────────────────────────────── */
import {
  Container, Grid, Paper, Typography,
} from "@mui/material";
import { auth }                    from "@/auth";
import { GetAllAccolades }         from "@/db/accolades/queries";
import { CreateAccolade, UpdateAccolade, UpdateAccolade as SoftDelete } from "@/db/accolades/commands";
import { GetUserByExternalId }     from "@/db/gaggle_users/queries";
import { revalidatePath }          from "next/cache";
import AccoladesTableClient        from "./_AccoladesTableClient";

export const dynamic = "force-dynamic";

/* helper: external-id ➜ UUID */
async function uuidFromSession(session: any) {
  const row = await GetUserByExternalId(session.external_id as string);
  if (!row) throw new Error("Unauthenticated");
  return row.id;
}

/* ─── server actions usable by the client component ─────────── */

export async function createAccolade(formData: FormData) {
  "use server";
  const session = await auth();
  const userId  = await uuidFromSession(session);

  await CreateAccolade({
    name:        formData.get("name")        as string,
    description: formData.get("description") as string,
    value:       formData.get("value")       as string,
    createdBy:   userId,
  });

  revalidatePath("/commissioner/accolades");
}

export async function updateAccolade(formData: FormData) {
  "use server";
  const session = await auth();
  const userId  = await uuidFromSession(session);

  await UpdateAccolade({
    id:          formData.get("id")          as string,
    name:        formData.get("name")        as string,
    description: formData.get("description") as string,
    value:       formData.get("value")       as string,
    updatedBy:   userId,
  });

  revalidatePath("/commissioner/accolades");
}

export async function softDeleteAccolade(formData: FormData) {
  "use server";
  const session = await auth();
  const userId  = await uuidFromSession(session);

  await UpdateAccolade({
    id:        formData.get("id") as string,
    isDeleted: true,
    updatedBy: userId,
  });

  revalidatePath("/commissioner/accolades");
}

/* ─── page component ─── */
const AccoladesPage = async () => {
  const session = await auth();
  if (!session || !session.groups.includes("gaggle_admin")) {
    return (
      <Container sx={{ mt: 8 }}>
        <Typography variant="h5" align="center">
          YOU ARE NOT ALLOWED TO VIEW THIS PAGE
        </Typography>
      </Container>
    );
  }

  const accolades = await GetAllAccolades({ includeDeleted: false });

  return (
    <Container maxWidth="lg" fixed>
      <Paper elevation={10} sx={{ mt: 4, p: 3 }}>
        <Grid container alignItems="center" sx={{ mb: 2 }}>
          <Grid size={{ xs: 12 }}>
            <Typography variant="h4">Accolades</Typography>
          </Grid>
        </Grid>

        {/* client table handles create + inline edit */}
        <AccoladesTableClient
          accolades={accolades}
          createAction={createAccolade}
          updateAction={updateAccolade}
          deleteAction={softDeleteAccolade}
        />
      </Paper>
    </Container>
  );
};

export default AccoladesPage;
