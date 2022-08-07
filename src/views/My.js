import MyIndex from "../pages/My"
import MyDetail from "../pages/My/detail"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const MyStack = createNativeStackNavigator()

const MyView = () => {
  // default show first screen
  return (
    <MyStack.Navigator>
      <MyStack.Screen name="MyIndex" options={{ headerShown: false }} >
        {props => <MyIndex  {...props} />}
      </MyStack.Screen>
      <MyStack.Group>
        <MyStack.Screen name="MyDetail" >
          {props => <MyDetail  {...props} />}
        </MyStack.Screen>
      </MyStack.Group>
    </MyStack.Navigator>
  )
}

export default MyView