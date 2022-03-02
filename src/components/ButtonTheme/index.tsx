import React from "react";
import { TouchableOpacityProps } from "react-native";
import { useDarkTheme } from "../../hooks/useDarkTheme";

import { Container, Icon, Title } from "./styles";

export const ButtonTheme = ({ ...rest }: TouchableOpacityProps) => {
  const { isDarkTheme } = useDarkTheme();

  return (
    <Container {...rest}>
      <Icon name={isDarkTheme ? "lightbulb-outline" : "moon-waxing-crescent"} />
      <Title>{ isDarkTheme ? "Tema claro" : "Tema escuro"}</Title>
    </Container>
  );
};
