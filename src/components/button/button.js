import {ButtonText, Container} from './button.styles'

import React from 'react'

export default function Button(props){
    return(
        <Container onPress={props.onPress} primary={props.primary}>
            <ButtonText secondary={props.secondary}>{props.name}</ButtonText>
        </Container>
    )
}