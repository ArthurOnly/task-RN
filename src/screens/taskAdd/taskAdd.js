import {Body, Container, Header, TextBig, TextSml, TextInput} from './taskAdd.styles'
import React,{useState} from 'react'
import {Text} from 'react-native'

import {useDispatch,useSelector} from 'react-redux'
import {taskAdd,taskGetList} from '../../redux/actions'

import Button from '../../components/button/button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Task from '../../components/taskComponent/task'

import DatePicker from 'react-native-datepicker'

export default function TaskAdd( {navigation} ){
    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Outubro','Setembro','Novembro','Dezembro']
    const [data,setData] = useState(new Date().getDate()+" de "+meses[new Date().getMonth()])

    const tasks = useSelector(state => state.tasks)
    const dispatch = useDispatch()

    const actualDate = () => {
        const date = new Date()
        const year = date.getUTCFullYear()
        const day = date.getUTCDate() < 10 ? '0'+date.getUTCDate() : date.getUTCDate()
        const month = date.getUTCMonth()+1 < 10 ? '0'+(date.getUTCMonth()+1) : date.getUTCMonth()+1
        
        const formatedDate = `${day}/${month}/${year}`
        return formatedDate
    }
    
    return(
        <Container>
            <Header>
                <Icon name='arrow-back' size={20} color="#fff" onPress={()=>navigation.navigate('Home')}/>
                <TextBig>{data}</TextBig>
                <Icon name='settings' size={20} color="#fff"/>
            </Header>
            <Body>
                <TextBig color='#342ead'>Titúlo da tarefa</TextBig>
                <TextInput></TextInput>

                <TextBig color='#342ead'>Data da tarefa</TextBig>
                <DatePicker
                    style={{width: '80%'}}
                    date={actualDate}
                    mode="date"
                    placeholder="select date"
                    format="DD/MM/YYYY"
                    minDate={actualDate}
                    confirmBtnText="Confirm"
                    cancelBtnText="Cancel"
                    iconComponent={<Icon name="event" size={30} color="#342ead" />}
                    onDateChange={(date) => {this.setState({date: date})}}
                />
                <Button name='Criar tarefa' primary='#342ead' secondary='#fff'/>
            </Body>
        </Container>
    )
}