import { Container, LogoImage } from "./styles";

export const Logo = () => {
  return (
      <Container>
        <LogoImage source={require("../../assets/logo-white.png")}/>
      </Container>
     
  );
};
