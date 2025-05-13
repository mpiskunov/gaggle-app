"use client";
import { Container, Grid, Icon, IconButton, Paper, Typography, useMediaQuery, useTheme } from "@mui/material";
import Image from "next/image";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
const Page = () => {
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.only("xs"));

  const imageStyle = {
    width: isXs ? "150px" : "75px", // Default width, adjust as needed
    height: isXs ? "150px" : "75px", // Default height, adjust as needed
    // Add other styles as necessary
  };
  return (
    <>
      <Container maxWidth="lg" fixed>
        <Paper elevation={10}>
          <Grid container spacing={2} border={"1px solid black"} mt={3} alignItems={"center"}>
            <Grid size={{ xs: 12, md: 2 }} display={"flex"} sx={{ justifyContent: { xs: "center", md: "left" } }} border={"1px solid red"}>
              <Image src={`/gaggle-icons/gaggle_open.png`} height={500} width={500} alt="haha" style={{ borderRadius: "50%" }} />
            </Grid>
            <Grid size={{ xs: 10, md: 8 }} display={"flex"} justifyContent={"center"} border={"1px solid red"}>
              <Typography sx={{ fontSize: { xs: "1.5rem" } }}>Gaggle Tournament 2025</Typography>
            </Grid>
            <Grid size={{ xs: 2 }} display={"flex"} justifyContent={"end"} border={"1px solid red"}>
              <IconButton onClick={() => alert("clicked!")} aria-label="more options">
                <MoreVertIcon fontSize="large" />
              </IconButton>
              <IconButton onClick={() => alert("clicked!")} aria-label="more options">
                <KeyboardArrowDownIcon fontSize="large" />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
};

export default Page;
