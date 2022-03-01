import React, { useEffect } from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { usePokemons } from "../../hooks/usePokemons";
import { Button } from "../Forms/Button";

import {
  ButtonCategory,
  ButtonCategoryFire,
  ButtonDetails,
  Category,
  Container,
  Content,
  ContentImage,
  FavoriteView,
  Icon,
  IconHeart,
  ImagePokemon,
  TextCategory,
  TextCategoryFire,
  TextId,
  Title,
} from "./styles";

type Props = {
  name: string;
  url: string;
  isFavorite: boolean;
  openModalDetails: () => void;
};

export const PokemonCard = ({
  name,
  url,
  isFavorite,
  openModalDetails,
  ...rest
}: Props) => {

  const { pokemons } = usePokemons();

  const pokemonCode = url.replace("https://pokeapi.co/api/v2/pokemon/", "").replace("/", "") || undefined;
  const urlImage = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonCode}.png`;

  return (
    <Container {...rest}>
      <FavoriteView>
        {isFavorite ?
        <Icon name="heart" /> 
        :
        <IconHeart name="heart-outlined" /> 

      }
      </FavoriteView>

      <ContentImage>
        <ImagePokemon
          resizeMode="contain"
          source={{ uri: urlImage }}
        />
      </ContentImage>

      <Content>
        <Title>{name}</Title>
        <TextId>ID: {pokemonCode}</TextId>
      </Content>

      <Category>
        <ButtonCategory>
          <TextCategory>Elétrico</TextCategory>
        </ButtonCategory>

        <ButtonCategoryFire>
          <TextCategoryFire>Fire</TextCategoryFire>
        </ButtonCategoryFire>
      </Category>

      <ButtonDetails onPress={() => openModalDetails()} title="Ver detalhes" />
    </Container>
  );
};
