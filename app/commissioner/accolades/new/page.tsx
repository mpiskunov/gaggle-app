import { auth } from "@/auth";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button,
} from "@mui/material";
import { CreateAccolade }       from "@/db/accolades/commands";
import { GetUserByExternalId }  from "@/db/gaggle_users/queries";
import { revalidatePath }       from "next/cache";
import { redirect }             from "next/navigation";

export const dynamic = "force-dynamic";

export async function create(form: FormData) {
  "use server";

  const session = await auth();
  const row = await GetUserByExternalId(session.external_id);
  if (!row) throw new Error("Unauthenticated");

  await CreateAccolade({
    name:        form.get("name")        as string,
    description: form.get("description") as string,
    value:       form.get("value")       as string,
    createdBy:   row.id,   // UUID FK
  });

  revalidatePath("/commissioner/accolades");
  redirect("/commissioner/accolades");
}

const NewAccoladePage = async () => {
  const session = await auth();
  if (!session || !session.groups.includes("gaggle_admin"))
    return (
      <Container sx={{ mt: 8 }}>
        <Typography variant="h5" align="center">
          YOU ARE NOT ALLOWED TO VIEW THIS PAGE
        </Typography>
      </Container>
    );

  return (
    <Container maxWidth="sm" sx={{ mt: 6 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Create Accolade
        </Typography>

        <form action={create}>
          <TextField
            label="Name"
            name="name"
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Description"
            name="description"
            fullWidth
            sx={{ mb: 2 }}
            required
          />
          <TextField
            label="Value"
            name="value"
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

export default NewAccoladePage;
