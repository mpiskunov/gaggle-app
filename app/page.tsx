"use client";
import BasicTable from "@/components/home-grid/HomeGrid";
import HorizontalLinearAlternativeLabelStepper from "@/components/stepper/stepper";
import { Box, Button, Grid2, Stack, styled, Typography } from "@mui/material";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <Box sx={{ width: "100%", bgcolor: `primary.light` }}>
        <Grid2
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
          <Grid2 size={{ xs: 12 }} sx={{ bgcolor: `primary.light` }} pb={3}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h3">2025 Courses</Typography>
            </div>
          </Grid2>
          <Grid2 size={{ xs: 12 }} sx={{ bgcolor: `primary.light` }}>
            <HorizontalLinearAlternativeLabelStepper></HorizontalLinearAlternativeLabelStepper>
          </Grid2>
        </Grid2>
      </Box>
      {/* <Box sx={{ width: "100%", bgcolor: `secondary.main` }}>
        <Grid2 container justifyContent={"center"}>
          <Grid2 size={3} border={"1px solid black"}>
            test
          </Grid2>
          <Grid2 size={3} border={"1px solid black"}>
            <Box sx={{ width: "100%", bgcolor: `grey` }}>
              <Grid2 container justifyContent={"center"}>
                <Grid2 size={12} border={"1px solid black"}>
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Image src={"/gaggle-icons/ShooterMcGag-trimmed.png"} alt="Main Logo" width={400} height={400} />
                  </div>
                </Grid2>
                <Grid2 size={12} border={"1px solid black"}>
                  <BasicTable />
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
          <Grid2 size={3} border={"1px solid black"}>
            <Box sx={{ width: "100%", bgcolor: `grey` }}>
              <Grid2 container justifyContent={"center"}>
                <Grid2 size={12} border={"1px solid black"}>
                  <img src="/gaggle-icons/GagFlag.gif" alt="golf flag" />
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Box> */}
      <Box sx={{ width: "100%", bgcolor: `background.default`, height: { xs: "100vh", sm: "85vh" } }} style={{ minHeight: "700px" }}>
        <Grid2 container sx={{ bgcolor: `primary.light` }} justifyContent={"center"} spacing={2} py={4} px={3}>
          <Grid2 size={{ xs: 12, sm: 12, md: 12 }} textAlign={"center"} sx={{ bgcolor: `primary.light` }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Image src={"/gaggle-icons/ShooterMcGag-trimmed.png"} alt="Main Logo" width={400} height={400} />
            </div>
          </Grid2>
        </Grid2>
        <Grid2 container sx={{ bgcolor: `primary.light` }} justifyContent={"center"} alignItems={"center"} pb={5}>
          <Grid2 size={{ xs: 12, sm: 3, md: 3 }} textAlign={"center"} sx={{ bgcolor: `primary.light` }}></Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 5, lg: 3 }} textAlign={"center"} sx={{ bgcolor: `primary.light` }} position={"relative"} zIndex={12}>
            <BasicTable />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 3, md: 3 }} textAlign={"center"} sx={{ bgcolor: `primary.light` }}>
            {/* <div style={{ display: "flex", justifyContent: "center" }}> </div> */}
            {/* <Image src={"/gaggle-icons/GagFlag.gif"} alt="Main Logo" width={700} height={700} style={{ position: "relative", zIndex: 13, left: "-30%", marginTop: "-10%" }} /> */}
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default Home;
