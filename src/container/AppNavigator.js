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
import SignInScreen from '../SignInScreen';
import AuthLoadingScreen from './AuthLoadingScreen';
import HomeScreen from '../HomeScreen';
import OtherScreen from '../OtherScreen';
import RegisterScreen from '../RegisterScreen';
import LoginComponent from "./loginpage/LoginComponent";
import TestHomeScreen from "./dashboard/TestHomeScreen";
import RegisterComponent from "./registerpage/RegisterComponent";
import DashboardDrawerComponent from "./dashboard/DashboardDrawerComponent";

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
            screen : DashboardDrawerComponent,
            headerMode: 'none',
            navigationOptions:()=> ({
                header:null
            })
        },
        Other : {
            screen : OtherScreen
        }
    }
);
const AuthStack = createStackNavigator(
    { 
        SignIn: {
            screen : LoginComponent,
            headerMode: 'none',
            navigationOptions:()=> ({
                header:null
            })
        },
        Register: {
            screen : RegisterComponent,
            headerMode: 'none',
            navigationOptions:()=> ({
                header:null
            })
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
