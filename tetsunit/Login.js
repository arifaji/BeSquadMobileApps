import React, {Component} from 'react'
import {StyleSheet, Text, View, StatusBar, TextInput, Image, TouchableWithoutFeedback, SafeAreaView, Keyboard, TouchableOpacity, KeyboardAvoidingView} from 'react-native'


export default class Login extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(

            <SafeAreaView style={styles.container}>

                <KeyboardAvoidingView behavior='padding' style={styles.container}>

                        <View style={styles.logoContainer}>
                            <View>

                                <Text style={styles.title}>App Wallet</Text>
                            </View>
                            <View style={styles.infoContainer}>
                                <TextInput style={styles.input}
                                           placeholder='Enter username'
                                           keyboardType='default'
                                           returnKeyType= 'next'
                                           autoCorrect={false}
                                           onSubmitEditing={() => this.refs.txtPassword.focus()}
                                />
                                <TextInput style={styles.input}
                                           placeholder='Enter password'
                                           keyboardType='default'
                                           returnKeyType= 'go'
                                           autoCorrect={false}
                                           ref={"txtPassword"}
                                />

                                <TouchableOpacity style={styles.buttonContainer}>
                                    <Text style={styles.text}>Submit</Text>
                                </TouchableOpacity>
                            </View>
                        </View>

                </KeyboardAvoidingView>
            </SafeAreaView>


        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#11A366',
        flexDirection: 'column'
    },
    logoContainer:{
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom: 100,
        flex: 1
    },
    logo:{
        height:200,
        width: 200
    },
    title:{
        color: 'white',
        fontSize: 30,
        fontWeight: '700',
        textAlign: 'center',
        marginBottom: 10,
        opacity: 0.9
    },
    infoContainer:{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 150,
        paddingHorizontal: 30
    },
    input: {
        height: 40,
        backgroundColor: 'white',
        color: '#280680',
        marginBottom: 5,
        paddingHorizontal: 10,
        borderRadius: 1
    },
    buttonContainer: {
        paddingVertical: 15,
        backgroundColor: '#280680',
        borderRadius: 1
    },
    text: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    }
});