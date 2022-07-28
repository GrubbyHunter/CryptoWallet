/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react'
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, StyleSheet, Button } from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Marketing from "../pages/Marketing"
import My from "../pages/My"
import News from "../pages/News"
import Wallet from "../pages/Wallet"
import NFT from "../pages/NFT"

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

const LogoTitle = () => {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("../assets/svg/home.png")}
    />
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="My" component={My} />
        <Tab.Screen name="NFT" component={NFT} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
// const App = () => {
//   return Home()

//   // return (
//   //   <NavigationContainer>
//   //     <Stack.Navigator initialRouteName="Wallet">
//   //       <Stack.Screen
//   //         name="Wallet"
//   //         component={Wallet}
//   //         options={{
//   //           headerLeft: (props) => <LogoTitle {...props} />,
//   //           headerRight: () => (
//   //             <Button
//   //               onPress={() => alert('This is a button!')}
//   //               title="Info"
//   //               color="#fff"
//   //             />
//   //           ),
//   //         }}
//   //       />
//   //       <Stack.Screen name="Marketing" component={Marketing} />
//   //     </Stack.Navigator>
//   //   </NavigationContainer>
//   //   );
// }

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
