import React from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
    Text,
  } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation'

export default class RegisterScreen extends React.Component {
    static navigationOptions = {
    title: 'Register page here',
    };

    render() {
    return (
        <View style={styles.container}>
            <Text>Register Screen</Text>
            <Button title="Sign Up!" onPress={this.signInAsync} />            
        </View>
    );
    }

    signInAsync = async () => {
    this.props.navigation.navigate('SignIn');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});