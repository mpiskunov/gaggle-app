import { Box, Grid, Paper, Typography } from "@mui/material";
import Image from "next/image";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";

const AboutPage = () => {
  const itemData = [
    {
      img: "/gaggle-icons/commissioner.jpg",
      title: "Breakfast",
      author: "@bkristastucchio",
    },
    {
      img: "/gaggle-icons/commissioner.jpg",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      img: "/gaggle-icons/commissioner.jpg",
      title: "Breakfast",
      author: "@bkristastucchio",
    },
    {
      img: "/gaggle-icons/commissioner.jpg",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      img: "/gaggle-icons/commissioner.jpg",
      title: "Breakfast",
      author: "@bkristastucchio",
    },
    {
      img: "/gaggle-icons/commissioner.jpg",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
  ];
  return (
    <>
      <Box sx={{ width: "100%", bgcolor: `primary.light` }}>
        <Grid container justifyContent={"center"} alignItems={"center"} py={4} borderBottom={"1px solid black"}>
          <Grid py={4} size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h2">About</Typography>
          </Grid>
          <Grid size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            {/* <Image src="/gaggle-icons/commissioner.jpg" height="800" width="800" alt="gaggle"></Image> */}
            <ImageList sx={{ width: 800, height: 800 }}>
              {itemData.map((item) => (
                <ImageListItem key={item.img}>
                  <img
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    alt={item.title}
                    loading="lazy"
                  />
                  <ImageListItemBar title={item.title} subtitle={<span>by: {item.author}</span>} position="below" />
                </ImageListItem>
              ))}
            </ImageList>
          </Grid>
          <Grid pt={4} size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h4">
              <i>&quot;Where fowl play is par for the course&quot;</i>
            </Typography>
          </Grid>
          <Grid p={4} size={{ xs: 12, lg: 8 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Paper elevation={24}>
              <Typography variant="h6" p={3}>
                There’s nothing quite like the illustrious prestige of the golf course. The gently rolling greens. Fairways for days that reach out to
                the rising sun. Even a couple of your dearest companions by your side with hope in their hearts and nothing but time to kill. This
                kind of world seems like it must only be reserved for the perpetually perfect whose outermost boundaries consist only of pearly gates
                atop luscious clouds of eternal splendor. Whether you are new to the links, or you’ve spent many years pursuing its grounds, you know
                that it welcomes all, without discrimination and beckons the masses with arousing persuasion. Thus out of respect for the human
                condition and necessity to satisfy mortal craving, the “To the 9’s tour” was born. Established in 2023 and brought to you by the
                freshly hatched “Golf Gaggle” league and community. Embark on this wild goose chase to see if you can reach the top of the “pecking
                order” and become the GOLDEN GOOSE. “fowl play is par for the course” when these birds of a feather, golf together. So join the flock
                today where fowl language is common practice and fellow members are quick with a chirp. After all “golf is for the birds”.
              </Typography>
            </Paper>
          </Grid>
          <Grid py={4} size={12} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Typography variant="h2">Contact</Typography>
          </Grid>
          <Grid p={4} size={{ xs: 12, lg: 8 }} sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <Paper elevation={24}>
              <Typography variant="h6" p={3}>
                jake@golfgaggle.com
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default AboutPage;
