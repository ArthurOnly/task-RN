import {Body, Container, Header, TextBig, TextSml, TextInput} from './taskAdd.styles'
import React,{useState} from 'react'
import {Text} from 'react-native'

import {useDispatch,useSelector} from 'react-redux'
import {taskAdd,taskGetList} from '../../redux/actions'

import Button from '../../components/button/button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Task from '../../components/taskComponent/task'

export default function TaskAdd(){
    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Outubro','Setembro','Novembro','Dezembro']
    const [data,setData] = useState(new Date().getDate()+" de "+meses[new Date().getMonth()])

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()
    
    return(
        <Container>
            <Header>
                <Text/>
                <TextBig>{data}</TextBig>
                <Icon name='settings' size={20} color="#fff"/>
            </Header>
            <Body>
                <TextBig color='#342ead'>Titúlo da tarefa</TextBig>
                <TextInput></TextInput>

                <TextBig color='#342ead'>Descrição</TextBig>
                <TextInput multiline></TextInput>
            </Body>
        </Container>
    )
}