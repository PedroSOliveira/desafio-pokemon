import styled from 'styled-components';
import { Text, View } from 'react-native';

interface Props {
    isLogging: boolean;
}

export const Container = styled(View)<Props>`  
    padding: ${({isLogging}) => isLogging ? 20 : 0}px;
    flex-direction: row;
    width: 100%;
    background: ${({ theme }) => theme.colors.background};
    align-items: center;
    justify-content: space-between;
`;

export const Subtitle = styled(Text)`
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    text-align: center;

    max-width: 90%;
`;


