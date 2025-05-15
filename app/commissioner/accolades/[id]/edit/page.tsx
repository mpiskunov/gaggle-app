import { auth } from "@/auth";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { GetAccoladeById }      from "@/db/accolades/queries";
import { UpdateAccolade }       from "@/db/accolades/commands";
import { GetUserByExternalId }  from "@/db/gaggle_users/queries";
import { revalidatePath }       from "next/cache";
import { redirect }             from "next/navigation";

export const dynamic = "force-dynamic";

/* ── server action ── */
export async function update(form: FormData) {
  "use server";
  const session = await auth();
  const row = await GetUserByExternalId(session.external_id);
  if (!row) throw new Error("Unauthenticated");

  await UpdateAccolade({
    id:          form.get("id")          as string,
    name:        form.get("name")        as string,
    description: form.get("description") as string,
    value:       form.get("value")       as string,
    updatedBy:   row.id,
  });

  revalidatePath("/commissioner/accolades");
  redirect("/commissioner/accolades");
}

/* ── page component ── */
const EditAccoladePage = async ({ params }: { params: { id: string } }) => {
  const session = await auth();
  if (!session || !session.groups.includes("gaggle_admin"))
    return (
      <Container sx={{ mt: 8 }}>
        <Typography variant="h5" align="center">
          YOU ARE NOT ALLOWED TO VIEW THIS PAGE
        </Typography>
      </Container>
    );

  const acc = await GetAccoladeById(params.id);
  if (!acc)
    return (
      <Container sx={{ mt: 8 }}>
        <Typography variant="h5" align="center">
          Accolade not found.
        </Typography>
      </Container>
    );

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Edit Accolade
        </Typography>

        <form action={update}>
          <input type="hidden" name="id" value={acc.id} />

          <TextField
            label="Name"
            name="name"
            defaultValue={acc.name}
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Description"
            name="description"
            defaultValue={acc.description}
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Value"
            name="value"
            defaultValue={acc.value}
            fullWidth
            sx={{ mb: 3 }}
            required
          />

          <Button type="submit" variant="contained">
            Save
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default EditAccoladePage;
