import { vh, vw } from 'react-native-expo-viewport-units';

import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: #342ead;
    flex: 1;
    flex-direction: column;
`;

export const Header = styled.View`
    background-color: transparent;
    flex-direction: row;
    justify-content: space-between;
    padding: 15px;
`;

export const TextBig = styled.Text`
    color: ${props=> props.color ? props.color : '#fff'};
    font-size: 22px;
    font-weight: bold;
`

export const TextSml = styled.Text`
    color: ${props=> props.color ? props.color : '#fff'};
    font-size: 14px;
    opacity: 0.7;
`

export const Body = styled.View`
    background-color: #fff;
    border-top-right-radius: 50px;
    flex:1;
    margin-top: 10px;
    padding-top: 30px;
    padding-left: 20px;
    padding-right: 20px;
    flex-direction: row;
    flex-direction: column;
    align-items: center;
`

export const TextInput = styled.TextInput`
    width: 80%;
    border-radius: 10px;
    background-color: #eee;
    padding: 4px;
    margin-top: 4px;
    margin-bottom: 12px;
`