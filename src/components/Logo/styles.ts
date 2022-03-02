import { Image, Platform, View } from 'react-native';
import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled(View)`
    align-items: center;
    background: ${({ theme }) => theme.colors.yellow};
    font-size: 25px;
    height: 60px;
    justify-content: center;
    margin-top: ${getStatusBarHeight() + 0}px;
    padding: 10px;
    width: 100%;
`;

export const LogoImage = styled(Image)`
`;

