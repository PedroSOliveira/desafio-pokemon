import { useEffect, useState } from "react";

import {
  Container,
  Footer,
  Form,
  Header,
  Logoimg,
  Title,
} from "./styles";
import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Button";
import { useAuth } from "../../hooks/useAuth";
import { Alert } from "react-native";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  const handleSignIn = async() => {
      signIn(email, password);
  }

  useEffect(() => {
    Alert.alert("Importante", "Credenciais: \n\n Email: admin \n Senha: 123")

  }, []);

  return (
    <Container>
      <Header>
        <Logoimg source={require("../../assets/logo.png")} />
      </Header>

      <Form>
        <Title>Comece a coletar pokémons!</Title>

        <Input
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email => admin"
        />
        <Input
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Senha => 123"
          secureTextEntry
        />

        <Button title="Entrar" onPress={handleSignIn} />
      </Form>
     
      <Footer resizeMode="stretch" source={require("../../assets/group.jpg")} />
    </Container>
  );
};
