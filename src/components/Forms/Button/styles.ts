import { Feather } from '@expo/vector-icons';
import styled from 'styled-components';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps {
    danger?: boolean;
}

export const Container = styled(TouchableOpacity)<ButtonProps>`  
    align-items: center;
    background: ${({ theme, danger }) => danger ? theme.colors.red : theme.colors.yellow };
    border-radius: 8px;
    flex-direction: row;
    justify-content: center;
    margin-top: 12px;
    padding: 16px;
    width: 100%;
`;

export const Title = styled(Text)<ButtonProps>`  
    color: ${({ theme, danger }) => danger ? theme.colors.background : theme.colors.text_dark};
    font-size: 16px;
    font-weight: bold;
    line-height: 24px;
    margin-left: 8px;
`;

export const Icon = styled(Feather)`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 24px;
`;

