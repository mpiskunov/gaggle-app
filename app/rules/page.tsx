import { Grid } from "@mui/material";
import Image from "next/image";

const RulesPage = () => {
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
            <Image src={"/rules/rules1-5-O.png"} width={1000} height={1000} alt="rules" />
          </div>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center",
              //border: "1px solid black",
            }}
          >
            <Image src={"/rules/rules6-14-O.png"} width={1000} height={1000} alt="rules" />
          </div>
          <div
            style={{
              display: "inline-flex",
              justifyContent: "center",
              //border: "1px solid black",
            }}
          >
            <Image src={"/rules/rules15-18-O.png"} width={1000} height={1000} alt="rules" />
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default RulesPage;
