import { Container, Header, Main, Subtitle, Title } from "./styles";

import pokeSplash from "../../assets/pokemon.json";

import LottieView from "lottie-react-native";

export const EmptyPage = () => {
  return (
    <Container>
      <Header>
        <LottieView
          duration={1000}
          source={pokeSplash}
          autoPlay
          loop
          resizeMode="contain"
          style={{ height: 300 }}
        />
      </Header>

      <Main>
        <Title>Está meio vazio por aqui!</Title>

        <Subtitle>
          Procure por pokémons para adicioná-los aos seus favoritos.
        </Subtitle>
      </Main>
    </Container>
  );
};
