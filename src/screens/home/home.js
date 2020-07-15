import {Body, Container, Header, TaskList, TaskTitle, TextBig, TextSml} from './home.styles'
import React,{useState} from 'react'
import {Text, View} from 'react-native'

import {useDispatch,useSelector} from 'react-redux'
import {taskAdd,taskGetList} from '../../redux/actions'

import Button from '../../components/button/button'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Task from '../../components/taskComponent/task'

export default function Home(){
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
            <Header>
                <View>
                    <TextBig>Hoje</TextBig>
                    <TextSml>3 tarefas</TextSml>
                </View>
                <Button onPress={()=>taskAdd({name:'task',description:'taskdescription'})} name='Adicionar'/>
                <Button onPress={()=>taskGetList(dispatch)} name='GetALl'/>
            </Header>
            <Body horizontal={true}>
                <TaskList>  
                    <TaskTitle>
                        <TextBig>1</TextBig>
                        <TextSml> de maios</TextSml>
                    </TaskTitle>
                    {
                        tasks.map(task=>{
                            return <Task key={task[0]} title={JSON.parse(task[1]).name} data='01/01/01'/>
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
        </Container>
    )
}