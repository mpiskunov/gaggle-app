"use client";
import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { Icon, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";
const pages = ["Home", "Gagglery", "About", "Rules"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];
const navItems = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "about",
    href: "/about",
  },
  // {
  //   title: "gagglery",
  //   href: "/gagglery",
  // },
  {
    title: "rules",
    href: "/rules",
  },
  // {
  //   title: "grid",
  //   href: "/grid",
  // },
  {
    title: "contact",
    href: "/contact",
  },
];

const ResponsiveAppBar = () => {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = await getSession();
        console.log(session);
        setSession(session);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = async () => {
    const session = await getSession();
    const authentikLogoutUrl = `${process.env.AUTHENTIK_INSTANCE_URL}`;
    const postLogoutRedirectUri = `${window.location.origin}/`;
    // Construct the end-session URL.  Use the URL constructor for easier parameter handling.
    const endSessionUrl = new URL("/application/o/golf-gaggle/end-session/", "https://pisky.id");

    // Add parameters if provided
    if (session) {
      endSessionUrl.searchParams.set("id_token_hint", session.id_token);
    }
    endSessionUrl.searchParams.set("redirect", "http://localhost:4000/logout/callback");
    // await fetch(endSessionUrl.toString(), {
    //   method: "GET", // Explicitly set the method to GET
    //   headers: {
    //     Accept: "application/json", //  Let authentik know we can accept JSON (optional, but good practice)
    //   },
    // }).then(async (req) => {
    //   debugger;
    //   await signOut({ redirect: true });
    // });
    await signOut();
    window.location.href = endSessionUrl.toString();
  };

  return (
    <AppBar position="static" sx={{ borderBottom: "1px solid black" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ pb: 1 }}>
          <Icon sx={{ fontSize: 75 }}>
            <Image src={"/gaggle-icons/GaggleLogo.png"} height={75} width={75} alt="haha" />
          </Icon>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography sx={{ textAlign: "center" }}>{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          {/* <Icon sx={{ fontSize: 75 }}>
            <Image src={"/gaggle-icons/GaggleLogo.png"} height={75} width={75} alt="haha" />
          </Icon> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              //fontFamily: "monospace",
              fontWeight: 700,
              //letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Golf Gaggle
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navItems.map((page) => (
              <Button key={page.title} href={page.href} sx={{ my: 2, color: "white", display: "block" }}>
                {page.title}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {session ? (
              <Button variant="outlined" sx={{ color: "black", borderColor: "black" }} onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <Button
                variant="outlined"
                sx={{ color: "black", borderColor: "black" }}
                onClick={() => signIn("authentik", { redirect: true, callbackUrl: "/" })}
              >
                Login
              </Button>
            )}

            {/* <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
              
            </Tooltip> */}
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography sx={{ textAlign: "center" }}>{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
