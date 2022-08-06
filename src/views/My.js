import List from "../pages/My/list"
import Detail from "../pages/My/detail"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const MyStack = createNativeStackNavigator()

const MyView = () => {
  // default show first screen
  return (
    <MyStack.Navigator>
      <MyStack.Screen name="My-List" component={List} />
      <MyStack.Screen name="My-Details" component={Detail} />
    </MyStack.Navigator>
  )
}

export default MyView