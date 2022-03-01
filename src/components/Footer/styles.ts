import styled from 'styled-components';
import { Text, View } from 'react-native';

export const Container = styled(View)`  
    padding: 0 20px;
    flex-direction: row;
    width: 100%;
    background: ${({ theme }) => theme.colors.background};
    align-items: center;
    margin-bottom: 20px;
    justify-content: space-between;
`;

export const Subtitle = styled(Text)`
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    text-align: center;

    max-width: 90%;
`;


