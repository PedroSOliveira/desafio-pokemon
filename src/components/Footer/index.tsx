import { Container, Subtitle } from "./styles";
import { ButtonTheme } from "../ButtonTheme";
import { ButtonLogout } from "../ButtonLogout";
import { useAuth } from "../../hooks/useAuth";
import { useDarkTheme } from "../../hooks/useDarkTheme";

interface Props {
  setTheme: () => void;
}

export const Footer = ({ setTheme }: Props) => {
  const { signOut, isLogging } = useAuth();

  const { setDarkTheme } = useDarkTheme();

  const handleSetTheme = () => {
    setDarkTheme();
    setTheme();
  };
  const handleLogout = () => {
    signOut();
  };

  return (
    <Container isLogging={isLogging}>
      {isLogging && (
        <>
          <ButtonTheme onPress={handleSetTheme} />
          <ButtonLogout onPress={handleLogout} />
        </>
      )}
    </Container>
  );
};
