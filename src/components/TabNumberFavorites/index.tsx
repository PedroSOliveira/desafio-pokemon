import { Container, TextFavorites } from "./styles";

interface NumberFavoriteProps {
  length: number;
}

export const TabNumberFavorites = ({length}: NumberFavoriteProps) => {
  return (
      <Container>
        <TextFavorites>{length}</TextFavorites>
      </Container>
     
  );
};
