import React from "react";

import { AuthRoutes } from "./auth.routes";
import { useAuth } from "../hooks/useAuth";
import { AppRoutes } from "./app.routes";
import { SplashScreen } from "../screens/Splash";

export const Routes = () => {
  const { isLogging, loading } = useAuth();

  if (loading) {
    return <SplashScreen />;
  }
  return isLogging ? <AppRoutes /> : <AuthRoutes />;
};
