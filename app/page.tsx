"use client";
import BasicTable from "@/components/home-grid/HomeGrid";
import { Alert, AlertTitle, Box, Button, Grid } from "@mui/material";
import SittingDuckTable from "@/components/sitting-duck-table/sitting-duck-table";

const Home = () => {
  return (
    <>
      <Alert
        variant="filled"
        severity="warning"
        action={
          <Button color="inherit" size="large">
            SUBMIT
          </Button>
        }
        sx={{ bgcolor: "#D4AF37" }}
      >
        Did you golf today?
      </Alert>

      <Box sx={{ width: "100%", height: { xs: "100vh", sm: "85vh", borderTop: "1px solid black" } }} style={{ minHeight: "700px" }}>
        <Grid container justifyContent={"center"} alignItems={"center"} pb={5}>
          <Grid size={{ xs: 12, sm: 3, lg: 2 }} textAlign={"center"}></Grid>
          <Grid size={{ xs: 12, sm: 12, lg: 8 }} textAlign={"center"} position={"relative"} zIndex={12}>
            <BasicTable />
            <SittingDuckTable />
          </Grid>
          <Grid size={{ xs: 12, sm: 3, lg: 2 }} textAlign={"center"}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
