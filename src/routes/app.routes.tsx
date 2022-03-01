import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

import { ListFavorites } from "../screens/Favorite";
import { PageAllPokemons } from "../screens/AllPage";
import { SearchPokemon } from "../screens/Search";
import { Logo } from "../components/Logo";
import { usePokemons } from "../hooks/usePokemons";
import { TabNumberFavorites } from "../components/TabNumberFavorites";

const { Navigator, Screen } = createMaterialTopTabNavigator();

export const AppRoutes = () => {
  const { pokemons } = usePokemons();
  const lengthFavorites = pokemons.length;

  return (
    <>
      <Logo />
      <Navigator
        screenOptions={{
          tabBarIndicatorStyle: {
            backgroundColor: "#1E1E1F",
          },
          tabBarStyle: { padding: 5 },
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
