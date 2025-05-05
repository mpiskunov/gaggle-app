import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      <Grid
        container
        direction="row"
        sx={{
          justifyContent: "center",
        }}
      >
        <Grid size={12} justifyContent={"center"} textAlign={"center"}>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center",
              //border: "1px solid black",
            }}
          >
            <Typography variant="h1">About</Typography>
          </div>
        </Grid>

        <Grid size={12} justifyContent={"center"} textAlign={"center"}>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center",
              //border: "1px solid black",
            }}
          >
            <Image src={"/rules/about-gaggle.png"} width={1000} height={1000} alt="rules" />
          </div>
        </Grid>
        <Grid size={12} justifyContent={"center"} textAlign={"center"}>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center",
              //border: "1px solid black",
            }}
          >
            <Image src={"/rules/about-commissioner.png"} width={1000} height={1000} alt="rules" />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default AboutPage;
