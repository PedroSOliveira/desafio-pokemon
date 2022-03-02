import LottieView from "lottie-react-native";
import {
  Container,
  Footer,
  Main,
  Header,
  Logoimg,
} from "./styles";
import pokeSplash from "../../assets/pokemon.json";

export const SplashScreen = () => {
  return (
    <Container>
      <Header>
        <Logoimg source={require("../../assets/logo.png")} />
      </Header>

      <Main>
        <LottieView
          duration={1000}
          source={pokeSplash}
          autoPlay
          loop
          resizeMode="contain"
          style={{height: 300}}
        />
      </Main>

      <Footer resizeMode="stretch" source={require("../../assets/group.jpg")} />
    </Container>
  );
};
