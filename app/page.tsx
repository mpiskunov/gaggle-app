"use client";
import BasicTable from "@/components/home-grid/HomeGrid";
import CoopTable from "@/components/coop/Coop";
import HorizontalLinearAlternativeLabelStepper from "@/components/stepper/stepper";
import { Box, Button, Grid, Paper, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";
import { relative } from "path";

const Home = () => {
  return (
    <>
      {/* <Box sx={{ width: "100%", bgcolor: `primary.light` }}>
        <Grid
          container
          direction="row"
          py={5}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            bgcolor: "background.default",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Grid size={{ xs: 12 }} sx={{}} pb={3}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h3">2025 Courses</Typography>
            </div>
          </Grid>
          <Grid size={{ xs: 12 }} sx={{}}>
            <HorizontalLinearAlternativeLabelStepper></HorizontalLinearAlternativeLabelStepper>
          </Grid>
        </Grid>
      </Box> */}
      <Box sx={{ width: "100%", height: { xs: "100vh", sm: "85vh", borderTop: "1px solid black" } }} style={{ minHeight: "700px" }}>
        <Grid container justifyContent={"center"} spacing={2} px={3} height={{ xs: "75vh", sm: "75vh" }}>
          <Grid size={{ xs: 12, sm: 12, md: 12 }} textAlign={"center"}>
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                borderRadius: "20px",
                position: "relative",
                bottom: "-65%",
                //border: "1px solid black",
              }}
              //sx={{ bgcolor: "primary.main" }}
              //elevation={12}
            >
              <Typography fontSize={"10rem"}>40</Typography>
            </div>
          </Grid>
          <Grid size={{ xs: 12, sm: 12, md: 12 }} textAlign={"center"}>
            <div
              style={{
                display: "inline-flex",
                justifyContent: "center",
                borderRadius: "20px",
                //border: "1px solid black",
              }}
              //sx={{ bgcolor: "primary.main" }}
              //elevation={12}
            >
              {/* <Image src={"/gaggle-icons/ShooterMcGag-trimmed.png"} alt="Main Logo" width={400} height={400} /> */}
              <Image src={"/headers/DaysLeft2.png"} alt="Main Logo" width={400} height={400} />
            </div>
          </Grid>
        </Grid>
        <Grid container justifyContent={"center"} alignItems={"center"} pb={5}>
          <Grid size={{ xs: 12, sm: 3, md: 3 }} textAlign={"center"}></Grid>
          <Grid size={{ xs: 12, sm: 12, md: 5, lg: 3 }} textAlign={"center"} position={"relative"} zIndex={12}>
            {/* <BasicTable /> */}
            <CoopTable />
          </Grid>
          <Grid size={{ xs: 12, sm: 3, md: 3 }} textAlign={"center"}>
            {/* <div style={{ display: "flex", justifyContent: "center" }}> </div> */}
            {/* <Image src={"/gaggle-icons/GagFlag.gif"} alt="Main Logo" width={700} height={700} style={{ position: "relative", zIndex: 13, left: "-30%", marginTop: "-10%" }} /> */}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Home;
