import {Body, Container, Header, TaskList, TaskTitle, TextBig, TextSml, DeleteButton} from './home.styles'
import React,{useState} from 'react'
import {Text, View} from 'react-native'
import {  } from '@react-navigation/native';

import {useDispatch,useSelector} from 'react-redux'
import {taskDelete,taskGetList} from '../../redux/actions'

import Button from '../../components/button/button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Task from '../../components/taskComponent/task'

export default function Home({navigation}){
    const meses = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Outubro','Setembro','Novembro','Dezembro']
    const [data,setData] = useState(new Date().getDate()+" de "+meses[new Date().getMonth()])

    const tasks = useSelector(state => state.tasks)
    const tasksSelect = useSelector(state => state.taskSelecteds)
    const dispatch = useDispatch()

    function deleteSelectTasks(){
        taskDelete(tasksSelect)
    }
    
    return(
        <Container>
            <Header>
                <Text/>
                <TextBig>{data}</TextBig>
                <Icon name='settings' size={20} color="#fff"/>
            </Header>
            <Header>
                <View>
                    <TextBig>Hoje</TextBig>
                    <TextSml>3 tarefas</TextSml>
                </View>
                <Button onPress={()=>navigation.navigate('Adicionar')} name='Adicionar' color='#fff'/>
                <Button onPress={()=>taskGetList(dispatch)} name='GetALl' color='#fff'/>
            </Header>
            <Body horizontal={true}>
                <TaskList>  
                    <TaskTitle>
                        <TextBig>1</TextBig>
                        <TextSml> de maios</TextSml>
                    </TaskTitle>
                    {
                        tasks.map(task=>{
                            return <Task id={task[0]} title={JSON.parse(task[1]).title} data='01/01/01'/>
                        })
                    }
                    <Task title='teste' data='01/01/01'/>
                </TaskList>
                <TaskList>  
                    <TaskTitle>
                        <TextBig>1</TextBig>
                        <TextSml> de maio</TextSml>
                    </TaskTitle>
                    <Task title='teste' data='01/01/01'/>
                    <Task title='teste' data='01/01/01'/>
                    <Task title='teste' data='01/01/01'/>
                    <Task title='teste' data='01/01/01'/>
                    <Task title='teste' data='01/01/01'/>
                    <Task title='teste' data='01/01/01'/>
                    <Task title='teste' data='01/01/01'/>
                    <Task title='teste' data='01/01/01'/>
                </TaskList>
            </Body>
            <DeleteButton onPress={deleteSelectTasks()}>
                <Icon name='delete' size={20} color="#fff"/>
            </DeleteButton>
        </Container>
    )
}