import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './src/AppNavigator';
import LayoutTestunit from './tetsunit/LayoutTestunit';
import Login from "./tetsunit/Login";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <AppNavigator/> */}
        <LayoutTestunit/>
        {/*<Login/>*/}
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
