import React from 'react'
import {
    ActivityIndicator,
    AsyncStorage,
    Button,
    StatusBar,
    StyleSheet,
    View,
    TextInput,
    Text,
  } from 'react-native';
import { createStackNavigator, createAppContainer} from 'react-navigation'

export default class SignInScreen extends React.Component {
    static navigationOptions = {
    title: 'Please sign in',
    };

    render() {
    return (
        <View style={styles.container}>
        <Text>Welcome to our bank!</Text>
        <TextInput />
        <TextInput />

        <Button title="Sign in!" onPress={this.signInAsync} />
        <Text> Haven't account yet? Register here</Text>
        <Button title="Register!" onPress={this.showRegisterPage} />
        </View>
    );
}

showRegisterPage = () => {
    this.props.navigation.navigate('Register');
};

signInAsync = async () => {
    await AsyncStorage.setItem('userToken', 'abc');
    this.props.navigation.navigate('App');
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});