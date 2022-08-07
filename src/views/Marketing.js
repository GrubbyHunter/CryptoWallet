import MarketingIndex from "../pages/Marketing"
import MarketingDetail from "../pages/Marketing/detail"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const MarketingStack = createNativeStackNavigator()

const MarketingView = () => {
  // default show first screen
  return (
    <MarketingStack.Navigator>
      <MarketingStack.Screen name="MarketingIndex" options={{ headerShown: false }} >
        {props => <MarketingIndex  {...props} />}
      </MarketingStack.Screen>
      <MarketingStack.Group>
        <MarketingStack.Screen name="MarketingDetail"  >
          {props => <MarketingDetail  {...props} />}
        </MarketingStack.Screen>
      </MarketingStack.Group>
    </MarketingStack.Navigator>
  )
}

export default MarketingView