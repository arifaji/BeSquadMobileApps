import React from 'react'
import { StyleSheet,View, Text} from 'react-native';

import { createDrawerNavigator } from 'react-navigation'
import DashboardComponent from "../../src/container/dashboard/DashboardComponent";


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
    Home:DashboardComponent
});



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});