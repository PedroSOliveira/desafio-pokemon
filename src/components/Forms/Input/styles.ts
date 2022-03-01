import styled from 'styled-components';
import { TextInput } from 'react-native';

import { Feather } from "@expo/vector-icons";

export const Container = styled(TextInput)`  
    align-items: center;
    background: ${({ theme }) => theme.colors.shape};
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.colors.text};
    color: ${({ theme }) => theme.colors.text};
    flex-direction: row;
    font-size: 14px;
    justify-content: space-between;
    margin-bottom: 15px;
    padding: 16px 18px;
    width: 100%;
`;

export const Icon = styled(Feather)`

    color: ${({ theme }) => theme.colors.text};
    font-size: 28px;
`;