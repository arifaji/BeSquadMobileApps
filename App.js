import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/container/AppNavigator';

import DashboardDrawerComponent from "./src/container/dashboard/DashboardDrawerComponent";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <AppNavigator/>
         {/*<DashboardDrawerComponent/>*/}
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
