/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  useColorScheme,
} from 'react-native'
// global theme config
import { ThemeProvider, createTheme } from "@rneui/themed"
// fixed iphone camera Occupied position
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native'
import Marketing from "./views/Marketing"
import News from "./views/News"
import React from 'react'
import Wallet from "./views/Wallet"
import My from "./views/My"
import NFT from "./views/NFT"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()
const theme = createTheme({
  colors: {
    primary: '#0052D9'
  }
})

const TAB_CONFIG = [
  {
    name: "Wallet",
    component: Wallet,
    icon: require("./assets/svg/wallet.png"),
    selectIcon: require("./assets/svg/wallet-selected.png")
  }, {
    name: "Marketing",
    component: Marketing,
    icon: require("./assets/svg/marketing.png"),
    selectIcon: require("./assets/svg/marketing-selected.png")
  }, {
    name: "NFT",
    component: NFT,
    icon: require("./assets/svg/nft.png"),
    selectIcon: require("./assets/svg/nft-selected.png")
  }, {
    name: "News",
    component: News,
    icon: require("./assets/svg/news.png"),
    selectIcon: require("./assets/svg/news-selected.png")
  }, {
    name: "My",
    component: My,
    icon: require("./assets/svg/my.png"),
    selectIcon: require("./assets/svg/my-selected.png")
  }
]

const showTab = (routeName) => {
  return [
    "Wallet-List",
    "My-List",
    "News-List",
    "NFT-List",
    "Marketing-List"
  ].indexOf(routeName) > -1
}
const App = () => {
  const routeNameRef = React.useRef()
  const navigationRef = React.useRef()
  const [tabVisible, setTabVisible] = React.useState()

  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <NavigationContainer
          ref={navigationRef}
          onReady={() =>
            (routeNameRef.current = navigationRef.current.getCurrentRoute().name)
          }
          onStateChange={() => {
            const currentRouteName = navigationRef.current.getCurrentRoute().name;

            if (currentRouteName) {
              setTabVisible(showTab(currentRouteName))
            }

            // Save the current route name for later comparision
            routeNameRef.current = currentRouteName;
          }}
        >
          <Tab.Navigator
            screenOptions={
              ({ navigation, route }) => ({
                activeTintColor: '#2C3167',
                headerShown: false, // in index page,not show header
                tabBarShowLabel: true, // show title
                // only main screen show zhe bottom tab
                tabBarStyle: { display: tabVisible ? "flex" : "none" }
              })
            }>
            {
              TAB_CONFIG.map((item, index) => {
                return (
                  <Tab.Screen key={index} name={item.name} component={item.component}
                    options={{
                      tabBarIcon: ({ focused }) => (
                        <Image source={focused ? item.selectIcon : item.icon} style={[styles.iconImage]} />
                      )
                    }}
                  />
                )
              })
            }
          </Tab.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

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
  iconImage: {
    width: 30,
    height: 30,
  }
});

export default App;
