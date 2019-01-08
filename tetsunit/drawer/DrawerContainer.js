import React from 'react'
import { StyleSheet,View, Text} from 'react-native';

import { createDrawerNavigator } from 'react-navigation'
import TestHomeScreen from "./TestHomeScreen";
import TestSettingScreen from "./TestSettingScreen";

export default class DrawerContainer extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>Drawer Navigation</Text>
            </View>
        );
    }
}
const AppDrawerNavigator = createDrawerNavigator({
    Home:TestHomeScreen,
    Setting: TestSettingScreen
});



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});