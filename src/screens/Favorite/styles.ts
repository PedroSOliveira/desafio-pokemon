import {FlatList, Image, Text, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`  
    align-items: flex-start;
    background: ${({ theme }) => theme.colors.background};
    flex: 1;
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
    padding: 20px 15px 0;
    width: 100%;
`;

export const PokerList = styled(FlatList).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        width: '100%',
        paddingBottom: 30,
        justifyContent: 'space-between'
    }
})`` as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;

