import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

export const ButtonLogout = ({ ...rest }: TouchableOpacityProps) => {
  return (
    <Container {...rest}>
        <Title>Sair</Title>
        <Icon name="log-out" /> 
    </Container>
  );
};
