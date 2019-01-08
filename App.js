import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/container/AppNavigator';
import LoginComponent from './src/container/loginpage/LoginComponent';
import RegisterComponent from "./src/container/registerpage/RegisterComponent";
import FormCustomer from "./tetsunit/FormCustomer";
import AxiosCardComponent from "./tetsunit/AxiosCardComponent";
import DrawerContainer from "./tetsunit/drawer/DrawerContainer";
import TestHomeScreen from "./tetsunit/drawer/TestHomeScreen";
import SnackDrawer from "./tetsunit/snackdraw/SnackDrawer";
import TestSettingScreen from "./tetsunit/drawer/TestSettingScreen";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <AppNavigator/> */}
        {/*<LoginComponent/>*/}
        {/*<RegisterComponent/>*/}
        {/*<FormCustomer/>*/}
        {/*<AxiosCardComponent/>*/}
        {/*<DrawerContainer/>*/}
        <SnackDrawer/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
