import {ButtonSelect, Container, TaskHour, TaskTitle, TextContainer} from './task.styles'
import React,{ useState } from 'react'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default function task(props){
    const [isActive,setActive] = useState(false)

    return (
        <Container isActive={isActive}>
            <ButtonSelect onPress={()=>setActive(!isActive)}>
                <Icon name="check" size={30} color="#FFF" />
            </ButtonSelect>
            <TextContainer>
                <TaskTitle isActive={isActive}>{props.title}</TaskTitle>
                <TaskHour isActive={isActive}>10:30-20:30</TaskHour>
            </TextContainer>
        </Container>
    )
}