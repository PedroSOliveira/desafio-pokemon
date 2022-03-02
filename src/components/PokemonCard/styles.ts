import {
    Entypo
} from '@expo/vector-icons';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import styled from 'styled-components';
import { Button } from '../Forms/Button';

export const Container = styled(View).attrs({
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
})`
    
    background: ${({ theme }) => theme.colors.background};
    border-radius: 7.5px;
    flex-direction: column;
    margin: 8px;
    padding: 8px 10px;
    width: 46%;
  
`;

export const Content = styled(View)`
    
`;

export const ContentImage = styled(View)`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: -15px;
`;

export const Category = styled(View)`
    width: 100%;
    flex-direction: row;
    margin-top: 10px;
  
`;

export const FavoriteView = styled(View)`
    width: 100%;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;

`;

export const Icon = styled(Entypo)`
    color: ${({ theme }) => theme.colors.red};
    font-size: 30px;
`;

export const IconHeart = styled(Entypo)`
    font-size: 30px;
`;

export const Title = styled(Text)`
    font-size: 18px;
    font-weight: bold;
`;

export const TextId = styled(Text)`
    color: ${({ theme }) => theme.colors.text};
    font-size: 15px;
    font-weight: bold;
    margin-top: 5px;

`;

export const TextCategory = styled(Text)`
    color: ${({ theme }) => theme.colors.gray_400};
    font-size: 12px;
`;

export const TextCategoryFire = styled(Text)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: 12px;
`;

export const ImagePokemon = styled(Image)`
    height: 120px;
    width: 120px;
`;

export const ButtonDetails = styled(Button)`
    padding: 4px;
    font-size: 5px;
    font-weight: normal;
    border-radius: 7.5px;
    margin-top: 15px;
`
export const ButtonCategory = styled(TouchableOpacity)`
    align-items: center;
    background: ${({ theme }) => theme.colors.yellow};
    border-radius: 14px;
    font-size: 5px;
    justify-content: center;
    padding: 4px 12px;
`;

export const ButtonCategoryFire = styled(TouchableOpacity)`
    align-items: center;
    background: ${({ theme }) => theme.colors.red};
    border-radius: 14px;
    justify-content: center;
    margin-left: 5px;
    padding: 4px 12px;
    width: 60px;
`;

