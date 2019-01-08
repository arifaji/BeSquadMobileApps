import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

class TestSettingScreen extends Component {
    render() {
        return(

                <View>
                    <Header
                        leftComponent={
                            <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}>
                                <Icon name={'ios-menu'} size={26} color={'#fff'}/>
                            </TouchableOpacity>
                        }
                        centerComponent={{ text: 'Test Screen', style: { color: '#fff' } }}
                        rightComponent={
                            <Text>Hi Dear :)</Text>
                        }
                    />
                    <Text>Test Setting Screen</Text>
                </View>

        );
    }
}
export default TestSettingScreen;