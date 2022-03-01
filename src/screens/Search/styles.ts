import styled from 'styled-components';
import { View, Text } from 'react-native';

export const Container = styled(View)`
    background: ${({ theme }) => theme.colors.background};
    flex: 1;
    padding: 20px 15px 0;
    justify-content: space-between;
`;

export const Header = styled(View)`
    align-items: center;
    justify-content: center;
    padding: 10px;
    width: 100%;
`;

export const Title = styled(Text)`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 23px;
`;

export const Main = styled(View)`
    flex: 1;
    justify-content: space-between;
    margin-bottom: 15px;
    padding-bottom: 10px;
    width: 100%;
`;

