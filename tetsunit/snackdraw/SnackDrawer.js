import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import TestHomeScreen from "../drawer/TestHomeScreen";
import TestSettingScreen from "../drawer/TestSettingScreen";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const AppStack = createStackNavigator(
    {
      Home : {
        screen : TestHomeScreen,
          headerMode: 'none',
          navigationOptions:()=> ({
              header:null
          })

      }
    }
);
const AuthStack = createStackNavigator(
    {
      Setting: {
        screen : TestSettingScreen
      }, headerMode: 'none',
        navigationOptions:()=> ({
            header:null
        })
    }
);
const AppSwitch = createDrawerNavigator(
    {

      // App: AppStack,
      // Auth: AuthStack,
        Home : {
            screen : TestHomeScreen
        },
        Setting: {
            screen : TestSettingScreen
        }


    }
);

const AppNavigator = createAppContainer(AppSwitch)
export default AppNavigator;
