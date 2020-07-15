import {ButtonText, Container} from './button.styles'

import React from 'react'

export default function Button(props){
    return(
        <Container onPress={props.onPress}>
            <ButtonText>{props.name}</ButtonText>
        </Container>
    )
}