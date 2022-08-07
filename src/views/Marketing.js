import List from "../pages/Marketing/list"
import Detail from "../pages/Marketing/detail"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const MarketingStack = createNativeStackNavigator()

const MarketingView = () => {
  // default show first screen
  return (
    <MarketingStack.Navigator>
      <MarketingStack.Screen name="MarketingList" component={List} options={{ headerShown: false }} />
      <MarketingStack.Group>
        <MarketingStack.Screen name="MarketingDetails" component={Detail} />
      </MarketingStack.Group>
    </MarketingStack.Navigator>
  )
}

export default MarketingView