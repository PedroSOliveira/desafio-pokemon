import styled from 'styled-components';
import { Image, Text, View } from 'react-native';

export const Container = styled(View)`  
    align-items: center;
    background: ${({ theme }) => theme.colors.background};
    flex: 1;
    padding: 0 10px;
    width: 100%;
`;

export const Main = styled(View)`  
    align-items: center;
    background: ${({ theme }) => theme.colors.background};
    flex: 1;
`;

export const Header = styled(View)`
    margin-top: 10px;
`;

export const Title = styled(Text)`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 30px;;
    font-weight: bold;
    margin-bottom: 10px;

`;

export const Subtitle = styled(Text)`
    color: ${({ theme }) => theme.colors.text};
    font-size: 18px;
    text-align: center;

    max-width: 90%;
`;

export const EmptyImg = styled(Image)`
`;


