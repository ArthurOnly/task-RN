import {Body, Container, Header, TextBig, TextSml, TextInput} from './taskAdd.styles'
import React,{useState} from 'react'

import {useDispatch} from 'react-redux'
import {taskAdd} from '../../redux/actions'

import {actualDate} from '../../helpers/date'

import Button from '../../components/button/button'
import Icon from 'react-native-vector-icons/MaterialIcons'

import DatePicker from 'react-native-datepicker'

export default function TaskAdd( {navigation} ){
    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Outubro','Setembro','Novembro','Dezembro']
    const [data,setData] = useState(new Date().getDate()+" de "+meses[new Date().getMonth()])

    const dispatch = useDispatch()

    const [taskData,setTaskData] = useState()
    const [name,setName] = useState()

    function handleSubmit(event){
        const payload = {
            title: name,
            data: taskData
        }
        if (name) taskAdd(payload,dispatch) 
        else return alert('Verifique os campos')

        alert('Tarefa criada!')
        navigation.navigate('Home')
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
                <TextInput onChangeText={text=>setName(text)}></TextInput>

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
                    onDateChange={date => setTaskData(date)}
                />
                <Button margin='20px' name='Criar tarefa' primary='#342ead' secondary='#fff' onPress={handleSubmit}/>
            </Body>
        </Container>
    )
}