import {ButtonSelect, Container, TaskHour, TaskTitle, TextContainer} from './task.styles'
import React,{ useState } from 'react'
import {useDispatch} from 'react-redux'
import {taskSelectToggler} from '../../redux/actions'

import Icon from 'react-native-vector-icons/MaterialIcons'

export default function task(props){
    const [isActive,setActive] = useState(false)

    const dispatch = useDispatch()

    return (
        <Container isActive={isActive}>
            <ButtonSelect onPress={()=>{
                setActive(!isActive)
                taskSelectToggler(props.id,dispatch)    
            }}>
                <Icon name="check" size={30} color="#FFF" />
            </ButtonSelect>
            <TextContainer>
                <TaskTitle isActive={isActive}>{props.title}</TaskTitle>
                <TaskHour isActive={isActive}>10:30-20:30</TaskHour>
            </TextContainer>
        </Container>
    )
}