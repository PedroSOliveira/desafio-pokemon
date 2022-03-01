import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

export const ButtonTheme = ({ ...rest }: TouchableOpacityProps) => {
  return (
    <Container {...rest}>
        <Icon name="moon-waxing-crescent" /> 
        <Title>Tema escuro</Title>
    </Container>
  );
};
