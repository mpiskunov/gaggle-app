import { auth } from "@/auth";
import { Button } from "@mui/material";

const SecretPage = async () => {
  const session = await auth();
  console.log("session", session);

  if (session == null) {
    return <h1>YOU ARE NOT AUTHENTICATED. PAGE IS BLOCKED.</h1>;
  }
  return (
    <>
      <h1>Welcome to my secret page!</h1>
      <Button variant="contained">Contained</Button>
    </>
  );
};

export default SecretPage;
