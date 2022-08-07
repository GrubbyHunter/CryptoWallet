import NFTIndex from "../pages/NFT"
import NFTDetail from "../pages/NFT/detail"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const NFTStack = createNativeStackNavigator()

const NFTView = () => {
  // default show first screen
  return (
    <NFTStack.Navigator>
      <NFTStack.Screen name="NFTIndex" options={{ headerShown: false }} >
        {props => <NFTIndex  {...props} />}
      </NFTStack.Screen>
      <NFTStack.Group>
        <NFTStack.Screen name="NFTDetail"  >
          {props => <NFTDetail  {...props} />}
        </NFTStack.Screen>
      </NFTStack.Group>
    </NFTStack.Navigator>
  )
}

export default NFTView