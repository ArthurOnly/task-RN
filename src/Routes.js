import 'react-native-gesture-handler';

import * as React from 'react';

import Home from './screens/home/home.js'
import TaskAdd from './screens/taskAdd/taskAdd.js'

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/*<Stack.Screen name="Home" component={Home} />*/}
        <Stack.Screen name="Adicionar" component={TaskAdd} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;
