import React from "react";
import { TouchableOpacityProps } from "react-native";

import { Container, Icon, Title } from "./styles";

interface Props extends TouchableOpacityProps {
  title: string;
  icon?: string;
  danger?: boolean;
}

export const Button = ({ title, icon, danger, ...rest }: Props) => {
  return (
    <Container danger={danger} {...rest}>
      <Icon name={icon} />
      <Title danger={danger}>{title}</Title>
    </Container>
  );
};
