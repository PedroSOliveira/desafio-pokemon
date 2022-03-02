import styled from 'styled-components';
import { View, Text, Image, FlatList } from 'react-native';
import { Button } from '../../components/Forms/Button';

interface ButtonFilterProps {
    isActivated: boolean
}

export const Container = styled(View)`
    background: ${({ theme }) => theme.colors.background};
    flex: 1;
    justify-content: space-between;
    padding: 20px 15px 0;
`;

export const Header = styled(View)`
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
`;

export const Title = styled(Text)`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 23px;
`;

export const Main = styled(View)`
    flex: 1;
    justify-content: space-between;
    margin: 15px 0;
    padding-bottom: 10px;
    width: 100%;
`;

export const ButtonActivate = styled(Button)<ButtonFilterProps>`  
    background: ${({ theme, isActivated }) => isActivated ? theme.colors.yellow : theme.colors.background};
    border: 1px solid ${({ theme, isActivated }) => isActivated ? theme.colors.yellow : theme.colors.text_dark};
    color: ${({ theme, isActivated }) => isActivated ? theme.colors.text_dark : theme.colors.text};
    max-width: 48%;
    padding: 10px;
`;

export const PokerList = styled(FlatList).attrs({
    showsVerticalScrollIndicator: false,
    contentContainerStyle: {
        width: '100%',
        paddingBottom: 30,
        justifyContent: 'space-between'
    }
})`` as React.ComponentType as new <DataListProps>() => FlatList<DataListProps>;