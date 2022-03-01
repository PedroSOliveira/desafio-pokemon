import React, { useState, useCallback, useEffect } from "react";

import { Button } from "../../components/Forms/Button";

import {
  ButtonCategory,
  ButtonCategoryFire,
  Container,
  ContainerImage,
  ContainerStats,
  ContentCategory,
  ContentDetails,
  ContentImage,
  ContentStats,
  ContentStatsBar,
  Header,
  IconClose,
  ImagePokemon,
  Main,
  Separator,
  StatsBar,
  TextCategory,
  TextCategoryFire,
  TextDetails,
  TextName,
  TextStats,
  Title,
} from "./styles";

import { ServiceApiPokemons } from "../../services/Pokemons";
import { usePokemons } from "../../hooks/usePokemons";

type PokeProps = {
  name: string;
  url: string;
  isFavorite: boolean;
};

type Stat = {
  name: string;
  url?: string;
};

type PokeStats = {
  base_stat: number;
  effort: number;
  stat: Stat;
};

interface Props extends PokeProps {
  closeModalDetails: () => void;
}

export const Details = ({
  name,
  url,
  isFavorite,
  closeModalDetails,
}: Props) => {
  const [statsPokemon, setStatsPokemon] = useState<PokeStats[]>([]);
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);

  const { addPokemon, removePokemon } = usePokemons();

  const pokemonCode = url
    .replace("https://pokeapi.co/api/v2/pokemon/", "")
    .replace("/", "");
  const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonCode}.png`;

  const getInfosPokemon = useCallback(async (name) => {
    try {
      const responseData = await ServiceApiPokemons.getPokemon(name);
      const { height, weight, stats } = responseData.data;

      setWeight(weight);
      setHeight(height);
      setStatsPokemon(stats);
    } catch (error: any) {
      alert(error.message);
      console.error(error.stack);
    } finally {
    }
  }, []);

  const replaceNameStat = (name: string) => {
    let abbreviation = "";
    switch (name) {
      case "hp": {
        abbreviation = "HP";
        break;
      }
      case "attack": {
        abbreviation = "ATK";
        break;
      }
      case "defense": {
        abbreviation = "DEF";
        break;
      }
      case "special-attack": {
        abbreviation = "SAT";
        break;
      }
      case "special-defense": {
        abbreviation = "SDE";
        break;
      }
      case "speed": {
        abbreviation = "SPD";
        break;
      }
    }

    return abbreviation;
  };

  const handleAddPokemonFavorites = (pokemon: PokeProps) => {
    addPokemon(pokemon);
    closeModalDetails();
  };

  const handleRemovePokemonFavorites = (pokemon: PokeProps) => {
    removePokemon(pokemon);
    closeModalDetails();
  };

  useEffect(() => {
    getInfosPokemon(name);
  }, []);

  return (
    <Container>
      <Header>
        <Title>Detalhes</Title>
        <IconClose onPress={() => closeModalDetails()} name="x" />
      </Header>
      <Separator />

      <Main>
        <TextName>{name}</TextName>

        <ContainerImage>
          <ContentImage>
            <ImagePokemon
              resizeMode="contain"
              source={{ uri: urlImage }}
            />
          </ContentImage>

          <ContentImage>
            <ImagePokemon
              resizeMode="contain"
              source={{ uri: urlImage }}
            />
          </ContentImage>
        </ContainerImage>

        <ContentDetails>
          <TextName>{(height * 0.254).toFixed(2)}m </TextName>
          <TextName>{(weight * 0.45).toFixed()}kg</TextName>
        </ContentDetails>

        <ContentCategory>
          <ButtonCategory>
            <TextCategory>Elétrico</TextCategory>
          </ButtonCategory>

          <ButtonCategoryFire>
            <TextCategoryFire>Fire</TextCategoryFire>
          </ButtonCategoryFire>
        </ContentCategory>

        <ContainerStats>
          <TextStats>Estatísticas</TextStats>

          {statsPokemon.map((stat) => {
            return (
              <ContentStats key={stat.stat.name}>
                <TextDetails>{replaceNameStat(stat.stat.name)}</TextDetails>

                <ContentStatsBar>
                  <StatsBar ability={stat.base_stat}></StatsBar>
                </ContentStatsBar>

                <TextDetails>{stat.base_stat}</TextDetails>
              </ContentStats>
            );
          })}
        </ContainerStats>
      </Main>

      {!isFavorite ? (
        <Button
          icon="bookmark"
          title="Adicionar aos favoritos"
          onPress={() => handleAddPokemonFavorites({ name, url, isFavorite })}
        />
      ) : (
        <Button
          danger={true}
          title="Remover dos favoritos"
          onPress={() =>
            handleRemovePokemonFavorites({ name, url, isFavorite })
          }
        />
      )}
    </Container>
  );
};
