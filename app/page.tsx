import { Box, Grid2, Stack } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ height: "100vh", minHeight: "800px" }} bgcolor={`background.default`}>
          <Grid2 container justifyContent={"center"} maxWidth={"md"}></Grid2>
        </Stack>
      </Box>
    </>
  );
}
