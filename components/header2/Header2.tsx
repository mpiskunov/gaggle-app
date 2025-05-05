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
import MenuItem from "@mui/material/MenuItem";
import { Icon, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { getSession } from "next-auth/react";
import { useEffect, useState } from "react";

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
    title: "rules",
    href: "/rules",
  },

  {
    title: "contact",
    href: "/contact",
  },
  {
    title: "user",
    href: "/user",
  },
  {
    title: "secret",
    href: "/secret",
  },
  {
    title: "accolades",
    href: "/accolades",
  },
];

const GaggleHeader = () => {
  const [session, setSession] = useState<Session | null>(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const session = await getSession();
        //console.log(session);
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

  const handleLogout = async (federated: boolean) => {
    await signOut({ redirect: !federated, callbackUrl: "/" });
    if (!federated) return;
    const endSessionUrl = new URL("/application/o/golf-gaggle/end-session/", "https://pisky.id");

    if (session) {
      endSessionUrl.searchParams.set("id_token_hint", session.id_token);
    }
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
            <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
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
              {navItems.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Link href={page.href}>
                    <Typography sx={{ textAlign: "center" }}>{page.title}</Typography>
                  </Link>
                </MenuItem>
              ))}
              {session && session.groups.includes("gaggle_admin") && (
                <MenuItem onClick={handleCloseNavMenu}>
                  <Link href={`/commissioner`}>
                    <Typography sx={{ textAlign: "center" }}>commissioner</Typography>
                  </Link>
                </MenuItem>
              )}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {navItems.map((page) => (
              <Button key={page.title} href={page.href} sx={{ my: 2, color: "white", display: "block" }}>
                {page.title}
              </Button>
            ))}{" "}
            {session && session.groups.includes("gaggle_admin") && (
              <Button href={`/commissioner`} sx={{ my: 2, color: "white", display: "block" }}>
                commissioner
              </Button>
            )}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            {session ? (
              <>
                <IconButton onClick={handleOpenUserMenu}>
                  <Icon sx={{ fontSize: 75 }}>
                    <Image src={`${session.user?.image}`} height={75} width={75} alt="haha" style={{ borderRadius: "50%" }} />
                  </Icon>
                </IconButton>
              </>
            ) : (
              <Button variant="outlined" sx={{ color: "black", borderColor: "black" }} onClick={() => signIn("authentik", { redirect: true, callbackUrl: "/" })}>
                Login
              </Button>
            )}
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Link href={"/profile"}>
                  <Typography sx={{ textAlign: "center" }}>profile</Typography>
                </Link>
              </MenuItem>
              <MenuItem onClick={() => handleLogout(false)}>
                <Typography sx={{ textAlign: "center" }}>logout</Typography>
              </MenuItem>
              <MenuItem onClick={() => handleLogout(true)}>
                <Typography sx={{ textAlign: "center" }}>not you?</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default GaggleHeader;