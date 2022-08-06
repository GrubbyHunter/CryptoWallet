import List from "../pages/News/list"
import Detail from "../pages/News/detail"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const NewsStack = createNativeStackNavigator()

const NewsView = () => {
  // default show first screen
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen name="News-List" component={List} />
      <NewsStack.Screen name="News-Details" component={Detail} />
    </NewsStack.Navigator>
  )
}

export default NewsView