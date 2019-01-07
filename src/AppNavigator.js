import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import SignInScreen from './SignInScreen';
import AuthLoadingScreen from './AuthLoadingScreen';
import HomeScreen from './HomeScreen';
import OtherScreen from './OtherScreen';
import RegisterScreen from './RegisterScreen';

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
            screen : HomeScreen
        },
        Other : {
            screen : OtherScreen
        }
    }
);
const AuthStack = createStackNavigator(
    { 
        SignIn: {
            screen : SignInScreen
        },
        Register: {
            screen : RegisterScreen
        }
    }
);
const AppSwitch = createSwitchNavigator(
  {
    AuthLoading : {
        screen : AuthLoadingScreen
    },
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

const AppNavigator = createAppContainer(AppSwitch)
export default AppNavigator;
