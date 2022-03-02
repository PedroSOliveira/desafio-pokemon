import React, { useState, useCallback, useEffect } from "react";
import { Container, Header, PokerList, Main, ButtonActivate } from "./styles";
import { Details } from "../Details";
import { Footer } from "../../components/Footer";
import { Modal } from "react-native";
import { PokemonCard } from "../../components/PokemonCard";
import { ServiceApiPokemons } from "../../services/Pokemons";

export interface PokemonProps {
  name: string;
  url: string;
  isFavorite: boolean;
}

export interface DataListProps extends PokemonProps {
  id: string;
}

export const PageAllPokemons = () => {
  const [pokemons, setPokemons] = useState<DataListProps[]>([]);
  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [isVisibleModalDetails, setIsVisibleModalDetails] = useState(false);
  const [filter, setFilter] = useState("");

  const getDataAllPokemons = useCallback(async () => {
    try {
      const responseData = await ServiceApiPokemons.getAllPokemons();
      const { results: pokemons } = responseData.data;

      setPokemons(pokemons);
    } catch (error: any) {
      alert(error.message);
      console.error(error.stack);
    } finally {
    }
  }, [pokemons]);

  const handleOpenDetailsModal = (item: PokemonProps) => {
    setPokemon(item);
    setIsVisibleModalDetails(true);
  };

  const handleCloseDetailsModal = () => {
    setIsVisibleModalDetails(false);
  };

  useEffect(() => {
    getDataAllPokemons();
  }, [pokemon, filter]);

  return (
    <Container>
      <Header>
        <ButtonActivate
          onPress={() => setFilter("")}
          isActivated={filter === "" ? true : false}
          title="Todos"
        />
        <ButtonActivate
          onPress={() => setFilter("fire")}
          isActivated={filter === "fire" ? true : false}
          title="Fire"
        />
        <ButtonActivate
          onPress={() => setFilter("eletric")}
          isActivated={filter === "eletric" ? true : false}
          title="Eletric"
        />
        <ButtonActivate
          onPress={() => setFilter("water")}
          isActivated={filter === "water" ? true : false}
          title="Water"
        />
      </Header>

      <Main>
        {pokemons.length > 0 && (
          <PokerList
            data={pokemons}
            numColumns={pokemons.length > 1 ? 2 : 1}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <PokemonCard
                openModalDetails={() => handleOpenDetailsModal(item)}
                name={item.name}
                url={item.url}
                isFavorite={item.isFavorite}
              />
            )}
          />
        )}
      </Main>

      <Modal visible={isVisibleModalDetails}>
        <Details
          closeModalDetails={handleCloseDetailsModal}
          name={pokemon.name}
          url={pokemon.url}
          isFavorite={pokemon.isFavorite}
        />
      </Modal>
    </Container>
  );
};
