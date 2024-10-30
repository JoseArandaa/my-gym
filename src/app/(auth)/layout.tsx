import React from "react";
import { Stack } from "@mui/material";
interface AuthLayoutProps {
  children: React.ReactNode;
}
function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <Stack sx={{ display: "grid", placeItems: "center", minHeight: "100vh" }}>
      {children}
    </Stack>
  );
}

export default AuthLayout;
