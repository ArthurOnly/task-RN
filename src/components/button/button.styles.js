import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    background-color: ${props=>props.primary ? props.primary : '#fff'};
    border-radius: 10px;
    justify-content: center;
    align-items: center;
    padding: 15px 20px 15px 20px;
    margin: ${props=> props.margin ? props.margin : '0 0 0 0'}
`;

export const ButtonText = styled.Text`
    font-size: 14px;
    color: ${props=>props.secondary ? props.secondary : '#000'};
`
