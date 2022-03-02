import { Image, Platform, View } from 'react-native';
import styled from 'styled-components';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled(View)`
    align-items: center;
    background: ${({ theme }) => theme.colors.yellow};
    font-size: 25px;
    height: 80px;
    justify-content: center;
    margin-top: ${getStatusBarHeight() + Platform.OS === "ios" ? 0 : -10}px;
    padding: 10px;
    width: 100%;
`;

export const LogoImage = styled(Image)`
`;

