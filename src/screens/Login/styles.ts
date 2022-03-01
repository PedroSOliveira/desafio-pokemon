import styled from 'styled-components';
import { Image, Text, View } from 'react-native';
import { Logo } from "../../components/Logo";


export const Container = styled(View)`  
    align-items: center;
    background: ${({ theme }) => theme.colors.background};
    flex: 1;
    justify-content: space-between;
`;

export const Header = styled(View)`
    margin-top: 50px;
`;

export const Form = styled(View)`
    margin-top: 10px;
    padding: 24px;
    width: 100%;
`;

export const Title = styled(Text)`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 30px;;
    font-weight: bold;
    margin-bottom: 30px;
`;

export const Logoimg = styled(Image)`
`;

export const Footer = styled(Image)`
    
`;

