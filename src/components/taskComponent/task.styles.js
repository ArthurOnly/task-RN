import styled from 'styled-components/native';

export const Container = styled.View`
    background-color: ${props=>props.isActive ? '#342ead' : '#fff'};
    border-radius: 10px;
    width: 90%;
    padding: 10px;
    flex-direction: row;
    margin-bottom: 10px; 
`;

export const TextContainer = styled.View`
    flex-direction: column;
`

export const TaskTitle = styled.Text`
    font-family: sans-serif;
    font-size: 18px;
    color: ${props=>props.isActive ? '#fff' : '#000'};
`

export const TaskHour = styled.Text`
    font-family: sans-serif;
    color: ${props=>props.isActive ? '#fff' : '#000'};
    font-size: 14px;
    opacity: 0.5;
`

export const ButtonSelect = styled.TouchableOpacity`
    border-radius: 5px;
    border: 1px solid #eee;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    justify-content: center;
    align-items: center;
`
