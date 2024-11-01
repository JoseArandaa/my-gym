"use client";
import { UserButton, useUser } from "@clerk/clerk-react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  Button,
  List,
  ListItem,
  Box,
  Switch,
  Skeleton,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
const ThemeSwitch = styled(Switch)(({ theme }) => ({
  width: 80,
  height: 40,
  padding: 8,
  "& .MuiSwitch-switchBase": {
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(40px)",
      color: "gold",
      "& + .MuiSwitch-track": {
        backgroundColor: "#fff",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 36,
    height: 36,
    backgroundColor: theme.palette.mode === "dark" ? "#2c3e50" : "#fff",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.3)",
  },
  "& .MuiSwitch-track": {
    borderRadius: 20 / 2,
    backgroundColor: theme.palette.mode === "dark" ? "#2c3e50" : "#e0e0e0",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

interface NavProps {
  handleChange: () => void;
  theme: boolean;
}

function NavItem({ href, children }: NavItemProps): JSX.Element {
  return (
    <ListItem sx={{ width: "auto" }} disablePadding>
      <Button
        component={Link}
        href={href}
        sx={{
          fontWeight: 700,
          color: "white",
          textTransform: "capitalize",
          "&:hover": { textDecoration: "underline" },
        }}
      >
        {children}
      </Button>
    </ListItem>
  );
}

export default function Nav({ handleChange, theme }: NavProps): JSX.Element {
  const { isSignedIn, user, isLoaded } = useUser();

  const isAdmin = user?.organizationMemberships.some(
    (membership) => membership.role === "org:admin"
  );
  if (!isLoaded) {
    return (
      <AppBar position="static" sx={{ minHeight: "89px" }}>
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            gap: "1.5rem",
            width: "100%",
            minHeight: "90px",
          }}
        >
          <Skeleton variant="rectangular" width={100} height={40} />
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" width={100} />
          <Skeleton variant="text" width={100} />
          <Skeleton variant="circular" width={40} height={40} />
        </Toolbar>
      </AppBar>
    );
  }

  return isSignedIn ? (
    <AppBar
      position="static"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end !important",
        gap: "2rem",
        paddingX: "1rem",
        boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.1)",
        background: "linear-gradient(145deg, #ff7733, #ff7000, #ff8000)",
        marginBottom: "1.5rem",
        minHeight: "60px",
      }}
    >
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: "1.5rem",
          width: "100%",
        }}
      >
        <ThemeSwitch
          icon={
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <DarkModeIcon
                sx={{ opacity: theme ? 1 : 0.5, fontSize: "1.5rem" }}
              />
            </Box>
          }
          checkedIcon={
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LightModeIcon
                sx={{ opacity: theme ? 0.5 : 1, fontSize: "1.5rem" }}
              />
            </Box>
          }
          checked={theme}
          onClick={handleChange}
        />

        <List
          sx={{
            display: "flex",
            gap: "1rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <NavItem href="/">Dashboard</NavItem>
          {!isAdmin ? (
            <NavItem href="/my-exercises">My Exercises</NavItem>
          ) : (
            <NavItem href="/add-exercise">Add Exercise</NavItem>
          )}
          <NavItem href="/about">About</NavItem>
        </List>
        <UserButton />
      </Toolbar>
    </AppBar>
  ) : (
    <></>
  );
}
