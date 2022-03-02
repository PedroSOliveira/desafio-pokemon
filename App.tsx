import React, { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";

import dark from "./src/global/styles/dark";
import light from "./src/global/styles/light";

import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "react-native";
import { PokemonsProvider } from "./src/hooks/usePokemons";
import { AuthProvider, useAuth } from "./src/hooks/useAuth";
import { Routes } from "./src/routes";
import { DarkThemeProvider, useDarkTheme } from "./src/hooks/useDarkTheme";
import { Footer } from "./src/components/Footer";

export default function App() {
  const [isThemeDark, setIsThemeDark] = useState(false);
  const { isDarkTheme } = useDarkTheme();

  const { isLogging } = useAuth();

  const handleSetTheme = () => {
    setIsThemeDark(!isThemeDark);
  };

  useEffect(() => {}, [isThemeDark]);
  return (
    <ThemeProvider theme={isThemeDark ? dark : light}>
      <DarkThemeProvider>
        <NavigationContainer>
          <AuthProvider>
            <PokemonsProvider>
              <StatusBar
                barStyle={isDarkTheme ? "dark-content" : "light-content"}
              />
              <Routes />
              {isLogging ?? <Footer setTheme={handleSetTheme} />}
            </PokemonsProvider>
          </AuthProvider>
        </NavigationContainer>
      </DarkThemeProvider>
    </ThemeProvider>
  );
}
