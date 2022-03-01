import React from "react";

import { ThemeProvider } from "styled-components";

import theme from "./src/global/styles/theme";

import { NavigationContainer } from "@react-navigation/native";

import { StatusBar } from "react-native";
import { PokemonsProvider } from "./src/hooks/usePokemons";
import { AuthProvider } from "./src/hooks/useAuth";
import { Routes } from "./src/routes";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AuthProvider>
          <PokemonsProvider>
            <StatusBar barStyle="dark-content" />
            <Routes />
          </PokemonsProvider>
        </AuthProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
}
