import List from "../pages/My/list"
import Detail from "../pages/My/detail"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const MyStack = createNativeStackNavigator()

const MyView = () => {
  // default show first screen
  return (
    <MyStack.Navigator>
      <MyStack.Screen name="MyList" component={List} options={{ headerShown: false }} />
      <MyStack.Group>
        <MyStack.Screen name="MyDetails" component={Detail} />
      </MyStack.Group>
    </MyStack.Navigator>
  )
}

export default MyView