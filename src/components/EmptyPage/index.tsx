import {
  Container,
  EmptyImg,
  Header,
  Main,
  Subtitle,
  Title,
} from "./styles";

export const EmptyPage = () => {
  return (
    <Container>
      <Header>
        <EmptyImg
          resizeMode="stretch"
          source={require("../../assets/emptyImg.png")}
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
