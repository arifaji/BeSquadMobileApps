import React, {Component} from 'react'
import {View, StyleSheet, TouchableOpacity, Image, ScrollView, AsyncStorage} from 'react-native'
import {Header,Card,Button,Text} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons'
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons'

class TestHomeScreen extends Component {

    constructor(props){
        super(props)
        const users = [
            {
                name: 'brynn',
                avatar: 'https://luqni.github.io/img/profile.jpg'
            },
        ]
    }

    render() {
        return(

                <View>
                    <Header
                        leftComponent={
                            <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}>
                                <Icon name={'ios-menu'} size={26} color={'#fff'}/>
                            </TouchableOpacity>
                        }
                        centerComponent={{ text: 'Dashboard', style: { color: '#fff' } }}
                        rightComponent={
                            <TouchableOpacity onPress={this._signOutAsync}>
                                <IconCom name={'logout-variant'} size={26} color={'#fff'}/>
                            </TouchableOpacity>
                        }
                    />

                    <ScrollView>
                    <Card>
                        <View style={{flexDirection:'row'}}>
                            <Image style={{width:100,height:100}} source={require('../../../assets/dashboardicon.png')} />
                            <View style={{marginLeft:10,justifyContent:'center'}}>
                                <Text style={{fontSize:20}}>
                                    Saldo Kamu :
                                </Text>
                                <Text style={{fontSize:16}}>
                                    Rp. 500.000,-
                                </Text>
                            </View>
                        </View>
                    </Card>

                        <View  style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <Card >
                                <Image style={{width:120,height:100}} source={require('../../../assets/dashboardicon.png')} />
                                <Text style={{fontSize:16}}>
                                    Rp. 500.000,-
                                </Text>
                            </Card>
                            <Card>
                                <Image style={{width:120,height:100}} source={require('../../../assets/dashboardicon.png')} />
                            </Card>
                        </View>

                    <Card
                        title='HELLO WORLD'
                        image={require('../../../assets/dashboardicon.png')}
                    >
                        <Text style={{marginBottom: 10}}>
                            The idea with React Native Elements is more about component structure than actual design.
                        </Text>
                        <Button
                            icon={{name: 'code'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='VIEW NOW' />
                    </Card>
                    <Card
                        title='HELLO WORLD'
                        image={require('../../../assets/dashboardicon.png')}
                    >
                        <Text style={{marginBottom: 10}}>
                            The idea with React Native Elements is more about component structure than actual design.
                        </Text>
                        <Button
                            icon={{name: 'code'}}
                            backgroundColor='#03A9F4'
                            buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
                            title='VIEW NOW' />
                    </Card>
                    </ScrollView>
                </View>

        );
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}
export default TestHomeScreen;