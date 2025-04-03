"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
const drawerWidth = 240;
const navItems = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "about",
    href: "/about",
  },
  {
    title: "gagglery",
    href: "/gagglery",
  },
  {
    title: "rules/regs",
    href: "/rules",
  },
  {
    title: "grid",
    href: "/grid",
  },
  {
    title: "contact",
    href: "/contact",
  },
];

interface Props {
  window?: () => Window;
  isSticky?: boolean;
}

export default function HeaderSection(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", bgcolor: "background.default" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Golf Gaggle
      </Typography>
      <Divider />
      <List sx={{ bgcolor: "background.default" }}>
        {navItems.map((item) => (
          <Link href={item.href} key={item.title}>
            <ListItem disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <Typography variant="h6">{item.title}</Typography>
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} className={props.isSticky ? "sticky" : ""} zIndex={1000}>
      <AppBar component="nav" position="sticky" sx={{ bgcolor: `primary.light`, color: `text.primary`, minHeight: "100px" }}>
        <Toolbar>
          <IconButton color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}>
            The Golf Gaggle
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item) => (
              <Link key={item.title} href={item.href}>
                <Button sx={{ color: "inherit" }}>
                  <Typography>{item.title}</Typography>
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}
