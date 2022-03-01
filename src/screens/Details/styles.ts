import { Feather } from '@expo/vector-icons';
import styled from 'styled-components';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

interface PokemomProps {
    ability: number;
}

export const Container = styled(View)`
    background: ${({ theme }) => theme.colors.background};
    flex: 1;
    padding: 12px 20px 20px;
`;

export const Header = styled(View)`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: ${getStatusBarHeight() + 0}px;
    width: 100%;
`;

export const Separator = styled(View)`
    background: ${({ theme }) => theme.colors.gray_100};
    height: 1px;
    margin-top: 10px;
    width: 100%;
`;

export const Title = styled(Text)`
    color: ${({ theme }) => theme.colors.gray_300};
    font-size: 23px;
`;

export const TextName = styled(Text)`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 24px;
    font-weight: bold;
`;

export const Main = styled(View)`
    flex: 1;
    margin-bottom: 15px;
    margin-top: 20px;
    padding-bottom: 10px;
    width: 100%;
`;

export const ContainerImage = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    max-width: 55%;
    margin-top: 10px;
`;

export const ContentImage = styled(View)`
    align-items: center;
    background: ${({ theme }) => theme.colors.shape_100};
    border-radius: 8px;
    justify-content: center;
    margin-top: 10px;
    max-width: 90px;
    padding: 5px;
`;

export const ContentDetails = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 15px;
    max-width: 40%;
`;

export const ContentCategory = styled(View)`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
    max-width: 50%;
`;

export const ContainerStats = styled(View)`
    justify-content: space-between;
    margin-top: 30px;
`;

export const ContentStats = styled(View)`
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 10px;
    width: 100%;
`;

export const ContentStatsBar = styled(View)`
    background: ${({ theme }) => theme.colors.gray_200};
    border-radius: 8px;
    height: 10px;
    justify-content: flex-start;
    width: 80%;
`;

export const StatsBar = styled(View) <PokemomProps>`
    background: ${({ theme }) => theme.colors.yellow};
    border-radius: 8px;
    height: 10px;
    max-width: 100%;
    width:  ${({ ability }) => ability}%;
`;

export const TextDetails = styled(Text)`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 16px;
    font-weight: bold;
`;

export const TextStats = styled(Text)`
    color: ${({ theme }) => theme.colors.text};
    font-size: 16px;
`;

export const ImagePokemon = styled(Image)`
    width: 80px;
    height: 80px;
`;

export const IconClose = styled(Feather)`
    color: ${({ theme }) => theme.colors.gray_300};
    font-size: 23px;
`;

export const ButtonCategory = styled(TouchableOpacity)`
    align-items: center;
    background: ${({ theme }) => theme.colors.yellow};
    border-radius: 8px;
    font-size: 5px;
    justify-content: center;
    padding: 8px;
    width: 48%;
`;

export const ButtonCategoryFire = styled(TouchableOpacity)` 
    align-items: center;
    background: ${({ theme }) => theme.colors.red};
    border-radius: 8px;
    justify-content: center;
    margin-left: 5px;
    padding: 8px;
    width: 48%;

`;

export const TextCategory = styled(Text)`
    color: ${({ theme }) => theme.colors.text_dark};
    font-size: 12px;
`;

export const TextCategoryFire = styled(Text)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: 12px;
`;
