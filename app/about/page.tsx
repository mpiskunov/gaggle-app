import { Box, Grid2, Typography } from "@mui/material";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <Box sx={{ width: "100%", bgcolor: `primary.light` }}>
        <Grid2 container justifyContent={"center"} alignItems={"center"} py={4} borderBottom={"1px solid black"}>
          <Grid2 size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Image src="/gaggle-icons/commissioner.jpg" height="800" width="800" alt="gaggle"></Image>
          </Grid2>
          <Grid2 pt={2} size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h4">
              <i>&quot;Where fowl play is par for the course&quot;</i>
            </Typography>
          </Grid2>

          <Grid2 pt={2} size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h4">
              <i>&quot;Where fowl play is par for the course&quot;</i>
            </Typography>
          </Grid2>
        </Grid2>
      </Box>
    </>
  );
};

export default AboutPage;
