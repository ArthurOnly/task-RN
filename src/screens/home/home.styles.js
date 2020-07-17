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
    color: #fff;
    font-size: 22px;
    font-weight: bold;
`

export const TextSml = styled.Text`
    color: #fff;
    font-size: 14px;
    opacity: 0.7;
`

export const Body = styled.ScrollView`
    background-color: #fff;
    border-top-left-radius: 50px;
    flex:1;
    margin-top: 10px;
    padding-top: 30px;
    padding-left: 20px;
    flex-direction: row;
`

export const TaskTitle = styled.View`
    background-color: #342ead;
    width: 90%;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const TaskList = styled.ScrollView`
    width: ${vw(100)};
`;

export const DeleteButton = styled.TouchableOpacity`
    background-color:#342ead;
    border-radius: 100px;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 20px;
    right: 20px;
`