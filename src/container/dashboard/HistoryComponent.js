import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity, AsyncStorage} from 'react-native'
import { Header } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'

export default class HistoryComponent extends Component {
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
                            <TouchableOpacity onPress={this._signOutAsync}>
                                <Text>Hi Dear :)</Text>
                            </TouchableOpacity>
                        }
                    />


                    <Text>Test History Screen</Text>

                    
                </View>

        );
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}
