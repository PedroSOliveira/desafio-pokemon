import React, { useState, useCallback, useEffect } from "react";

import { Input } from "../../components/Forms/Input";

import { Container, Header, Main } from "./styles";
import { PokemonCard } from "../../components/PokemonCard";
import { Footer } from "../../components/Footer";
import { ServiceApiPokemons } from "../../services/Pokemons";
import { Modal } from "react-native";
import { Details } from "../Details";

export interface PokemonProps {
  name: string;
  url: string;
  isFavorite: boolean;
}

export const SearchPokemon = () => {
  const [name, setName] = useState("");
  const [pokemon, setPokemon] = useState({} as PokemonProps);
  const [isVisibleModalDetails, setIsVisibleModalDetails] = useState(false);

  const getInfosPokemon = useCallback(async (name) => {
    try {
      const responseData = await ServiceApiPokemons.getPokemon(name);
      const { name: namePokemon, url: urlPokemon } = responseData.data.forms[0];

      setPokemon({
        ...pokemon,
        name: namePokemon,
        url: urlPokemon.replace("-form", ""),
      });
    } catch (error: any) {
      alert(error.message);
      console.error(error.stack);
    } finally {
    }
  }, []);

  const handleOpenDetailsModal = (item: PokemonProps) => {
    setPokemon(item);
    setIsVisibleModalDetails(true);
  };

  const handleCloseDetailsModal = () => {
    setIsVisibleModalDetails(false);
  };

  const handleSearchPokemon = (e: any) => {
    if (!name) {
      return alert("Campo vazio!!");
    }
    getInfosPokemon(name);
  };

  useEffect(() => {}, [name]);

  return (
    <Container>
      <Header>
        <Input
          value={name}
          onChangeText={(text) => setName(text.toLowerCase())}
          placeholder="Procure por pokémons"
          onSubmitEditing={(event) => handleSearchPokemon(event)}
        />
      </Header>

      <Main>
        {pokemon.name ? (
          <PokemonCard
            openModalDetails={() => handleOpenDetailsModal(pokemon)}
            name={pokemon.name}
            url={pokemon.url}
            isFavorite={pokemon.isFavorite}
          />
        ) : (
          <></>
        )}
      </Main>
      {pokemon ? (
        <Modal visible={isVisibleModalDetails}>
          <Details
            closeModalDetails={handleCloseDetailsModal}
            name={pokemon.name}
            url={pokemon.url}
            isFavorite={pokemon.isFavorite}
          />
        </Modal>
      ) : (
        <></>
      )}
      <Footer />
    </Container>
  );
};
