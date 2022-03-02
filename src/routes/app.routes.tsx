import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { ListFavorites } from "../screens/Favorite";
import { PageAllPokemons } from "../screens/AllPage";
import { SearchPokemon } from "../screens/Search";
import { Logo } from "../components/Logo";
import { usePokemons } from "../hooks/usePokemons";
import { TabNumberFavorites } from "../components/TabNumberFavorites";
import { useDarkTheme } from "../hooks/useDarkTheme";

const { Navigator, Screen } = createMaterialTopTabNavigator();

export const AppRoutes = () => {
  const { pokemons } = usePokemons();
  const lengthFavorites = pokemons.length;

  const { isDarkTheme } = useDarkTheme();

  return (
    <>
      <Logo />
      <Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: isDarkTheme ? "#FFCB05" : "#1E1E1F",
          },
          tabBarLabelStyle: {
            color: isDarkTheme ? "#FFCB05" : "#1E1E1F",
          },
          tabBarStyle: {
            padding: 5,
            backgroundColor: isDarkTheme ? "#1E1E1F" : "#fff",
          },
          
        }}
      >
        <Screen
          options={{
            tabBarBadge: () => <TabNumberFavorites length={lengthFavorites} />,
          }}
          name="Favoritos"
          component={ListFavorites}
        />
        <Screen name="Procurar" component={SearchPokemon} />
        <Screen name="Ver todos" component={PageAllPokemons} />
      </Navigator>
    </>
  );
};
