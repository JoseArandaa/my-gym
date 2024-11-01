"use client";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "@/components/Nav/Nav";
import { CssBaseline, Paper, ThemeProvider, createTheme } from "@mui/material";
import { useState } from "react";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = useState(false);
  const appTheme = createTheme({
    palette: {
      mode: mode ? "light" : "dark",
      background: {
        default: mode ? "#fff" : "linear-gradient(145deg, #1c1c1e, #292a2d)", // Cambiar a un color sólido para el fondo oscuro
      },
      primary: {
        main: "#ff7733",
      },
      secondary: {
        main: "#d3d3d3",
      },
      text: {
        primary: mode ? "#000" : "#fff",
        secondary: mode ? "#555" : "#ccc",
      },
    },
  });
  const handleChange = () => {
    setMode(!mode);
    console.log(mode);
  };
  return (
    <ClerkProvider>
      <ThemeProvider theme={appTheme}>
        <html lang="en">
          <body>
            <CssBaseline>
              <Nav theme={mode} handleChange={handleChange} />
              <Paper elevation={0} sx={{ height: "100vh", padding: "0 2rem" }}>
                {children}
              </Paper>
            </CssBaseline>
          </body>
        </html>
      </ThemeProvider>
    </ClerkProvider>
  );
}
