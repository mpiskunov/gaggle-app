import { auth } from "@/auth";
import { Container, Grid } from "@mui/material";

const Page = async () => {
  const session = await auth();

  if (!session || !session.groups.includes("gaggle_admin"))
    // MAKE THIS RETURN A DEFAULT NOT ALLOWED PAGE.
    return (
      <>
        <h1>YOU ARE NOT ALLOWED TO VIEW THIS PAGE</h1>
      </>
    );

  return (
    <>
      <Container fixed>
        <Grid container spacing={2} border={"1px solid black"}>
          <Grid size={8}>
            <>size=8</>
          </Grid>
          <Grid size={4}>
            <>size=4</>
          </Grid>
          <Grid size={4}>
            <>size=4</>
          </Grid>
          <Grid size={8}>
            <>size=8</>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Page;
