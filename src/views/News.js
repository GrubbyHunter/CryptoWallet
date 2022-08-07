import NewsIndex from "../pages/News"
import NewsDetail from "../pages/News/detail"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const NewsStack = createNativeStackNavigator()

const NewsView = () => {
  // default show first screen
  return (
    <NewsStack.Navigator>
      <NewsStack.Screen name="NewsIndex" options={{ headerShown: false }} >
        {props => <NewsIndex  {...props} />}
      </NewsStack.Screen>
      <NewsStack.Group>
        <NewsStack.Screen name="NewsDetail"  >
          {props => <NewsDetail  {...props} />}
        </NewsStack.Screen>
      </NewsStack.Group>
    </NewsStack.Navigator>
  )
}

export default NewsView