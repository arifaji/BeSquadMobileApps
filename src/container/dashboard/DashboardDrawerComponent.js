import React from 'react';
import {
  ActivityIndicator,
  AsyncStorage,
  Button,
  StatusBar,ScrollView,
  StyleSheet,Image,
  View,SafeAreaView,
} from 'react-native';
import { createStackNavigator, createSwitchNavigator,
    DrawerItems,createAppContainer, createDrawerNavigator } from 'react-navigation';
import DashboardComponent from "./DashboardComponent";
import TransaksiComponent from "./TransaksiComponent";
import HistoryComponent from "./HistoryComponent";
import ProfileComponent from "./ProfileComponent";
import AboutComponent from "./AboutComponent";


const CustomerDrawerComponent = (props) => (
    <SafeAreaView style={{flex:1}}>
        <View style={{height:150,backgroundColor:'white',alignItems: 'center',justifyContent: 'flex-end'}}>
            <Image source={require('../../../assets/LogoJenius.png')}
                style={{height:120,width:120,borderRadius:60}}
            />
        </View>
        <ScrollView>
            <DrawerItems {...props}/>
        </ScrollView>
    </SafeAreaView>
)

const AppSwitch = createDrawerNavigator(
    {

      // App: AppStack,
      // Auth: AuthStack,
        Dashboard : {
            screen : DashboardComponent
        },
        Transaction : {
          screen : TransaksiComponent
        },
        History : {
          screen : HistoryComponent
        },
        Profile : {
          screen : ProfileComponent
        },
        About : {
          screen : AboutComponent
        },

    },{
        contentComponent:CustomerDrawerComponent
    }
);

const DashboardDrawerComponent = createAppContainer(AppSwitch)
export default DashboardDrawerComponent;
