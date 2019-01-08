import React, {Component} from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {Header,Card,Button} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons'

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
                            <Text style={{color:'white'}}>Hi Dear :)</Text>
                        }
                    />
                    <Text>Test Home Screen</Text>
                    <Card
                        title='HELLO WORLD'
                        image={{uri:this.avatar}}
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




                </View>

        );
    }
}
export default TestHomeScreen;