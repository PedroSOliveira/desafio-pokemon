import styled from 'styled-components';
import { Image, Text, View } from 'react-native';
import { Logo } from "../../components/Logo";


export const Container = styled(View)`  
    flex: 1;
    background: ${({ theme }) => theme.colors.background};
    align-items: center;
    justify-content: space-between;
`;

export const Header = styled(View)`
    margin-top: 50px;
`;

export const Main = styled(View)`
    width: 100%;
    justify-content: center;
    align-items: center;
`;

export const Title = styled(Text)`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 30px;;
    font-weight: bold;
    margin-bottom: 30px;
`;

export const LogoSplash = styled(Logo)`
    font-size: 50px;
`;

export const Logoimg = styled(Image)`
`;

export const Footer = styled(Image)`
    
`;

