import styled from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

export const Container = styled(TouchableOpacity)`  
    align-items: center;
    background: ${({ theme }) => theme.colors.button_theme};
    border-radius: 22px;
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    width: 40%;
`;

export const Icon = styled(MaterialCommunityIcons)`
    color: ${({ theme }) => theme.colors.text_light};
    font-size: 20px;
    margin-right: 5px;
`;

export const Title = styled(Text)`  
    color: ${({ theme }) => theme.colors.text_light};
    font-size: 14px;
`;

