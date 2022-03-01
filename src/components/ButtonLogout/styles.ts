import styled from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';
import { Feather } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)`  
    align-items: center;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.text_dark};
    flex-direction: row;
    justify-content: space-between;
    padding: 8px;
    width: 30%;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 14px;
`;

export const Title = styled(Text)`  
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 14px;
`;

