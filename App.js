import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/container/AppNavigator';

import RegisterComponent from "./src/container/registerpage/RegisterComponent";
import FormCustomer from "./tetsunit/FormCustomer";
import AxiosCardComponent from "./tetsunit/AxiosCardComponent";


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <AppNavigator/>
        {/*<RegisterComponent/>*/}
        {/*<FormCustomer/>*/}
        {/*<AxiosCardComponent/>*/}


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
