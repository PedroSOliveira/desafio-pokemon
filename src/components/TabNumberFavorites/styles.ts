import { Text, View } from 'react-native';
import styled from 'styled-components';

export const Container = styled(View)`
    align-items: center;
    background: ${({ theme }) => theme.colors.gray_300};
    border-radius: 20px;
    height: 20px;
    justify-content: center;
    text-align: center;
    width: 20px;
`;

export const TextFavorites = styled(Text)`
    color: ${({ theme }) => theme.colors.shape};
    font-size: 12px;
`;
