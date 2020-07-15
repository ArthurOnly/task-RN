import styled from 'styled-components/native'

import { vh, vw } from 'react-native-expo-viewport-units';

const GlobalStyle = styled.View`
    font-family: 'roboto';
    font-size: 48px;   
     
    width: ${vw(100)};
    height: ${vh(100)};
`

export default GlobalStyle