import { Container, Subtitle } from "./styles";
import { ButtonTheme } from "../ButtonTheme";
import { ButtonLogout } from "../ButtonLogout";
import { useAuth } from "../../hooks/useAuth";

export const Footer = () => {

  const { signOut } = useAuth();

  const handleLogout = () => {
    signOut();
  };

  return (
    <Container>
      <ButtonTheme />
      <ButtonLogout onPress={handleLogout} />
    </Container>
  );
};
