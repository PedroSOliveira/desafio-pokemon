import { useEffect, useState } from "react";

import { PokemonCard } from "../../components/PokemonCard";

import { Modal } from "react-native";

import { Details } from "../Details";

import { Container, Main, Title, PokerList, Header } from "./styles";
import { EmptyPage } from "../../components/EmptyPage";
import { Footer } from "../../components/Footer";
import { usePokemons } from "../../hooks/usePokemons";

export interface PokemonProps {
  name: string;
  url: string;
  isFavorite: boolean;
}

export interface DataListProps extends PokemonProps {
  id: string;
}

export const ListFavorites = () => {
  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [isVisibleModalDetails, setIsVisibleModalDetails] = useState(false);

  const { pokemons } = usePokemons();

  const handleOpenDetailsModal = (item: PokemonProps) => {
    setPokemon(item);
    setIsVisibleModalDetails(true);
  };

  const handleCloseDetailsModal = () => {
    setIsVisibleModalDetails(false);
  };

  useEffect(() => {}, [pokemons]);

  return (
    <Container>
      {pokemons.length >= 1 ? (
        <Main>
          <Header>
            <Title>Olá, você tem {pokemons.length} pokémon(s) !</Title>
          </Header>
          <PokerList
            data={pokemons}
            numColumns={pokemons.length >= 1 ? 2 : 1}
            keyExtractor={(item) => item.name}
            renderItem={({ item }) => (
              <PokemonCard
                openModalDetails={() => handleOpenDetailsModal(item)}
                name={item.name}
                url={item.url}
                isFavorite={true}
              />
            )}
          />
        </Main>
      ) : (
        <EmptyPage />
      )}

      <Modal visible={isVisibleModalDetails}>
        <Details
          closeModalDetails={handleCloseDetailsModal}
          name={pokemon.name}
          url={pokemon.url}
          isFavorite={true}
        />
      </Modal>
    </Container>
  );
};
