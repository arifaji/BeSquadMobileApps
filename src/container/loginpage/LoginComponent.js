import React from 'react'
import {
    View, Image,
    Text, StyleSheet,
    ImageBackground,
    TextInput,
    Dimensions, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, Button, AsyncStorage
} from 'react-native';

import bgImage from '../../../assets/spacewallpaper.jpg';
import logoImage from '../../../assets/LogoJenius.png';
import Icon from 'react-native-vector-icons/Ionicons'

const {width: WIDTH} = Dimensions.get('window')
export default class LoginComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPass: true,
            press: false
        }
    }

    showPass = () => {
        if (this.state.press == false){
            this.setState({showPass:false, press:true})
        } else {
            this.setState({showPass:true, press:false})
        }
    }

    render(){
        return(
            <SafeAreaView style={styles.backgroundContainer}>
                <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                    <KeyboardAvoidingView behavior='padding' style={styles.backgroundContainer}>
                        <View style={styles.logoContainer}>
                            <Image source={logoImage} style={styles.logo}/>
                            <Text style={styles.logoText}>Jenius BTPN</Text>
                        </View>

                        <View style={styles.inputContainer}>
                            <Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                            style={styles.inputIcon}/>
                            <TextInput
                                style={styles.input}
                                placeholder={'Username'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Icon name={'md-lock'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                                  style={styles.inputIcon}/>
                            <TextInput
                                style={styles.input}
                                placeholder={'Password'}
                                secureTextEntry={this.state.showPass }
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                            />

                            <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
                                <Icon name={this.state.press == false ? 'md-eye':'md-eye-off'} size={26} color={'rgba(255, 255, 255, 0.6)'}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnLogin} onPress={this.signInAsync}>
                                <Text style={styles.text}>Login</Text>
                            </TouchableOpacity>

                            <View style={styles.signUp}>
                                <Text style={styles.textWhite}>Don't have an account yet ?</Text>
                            </View>

                            <TouchableOpacity style={styles.btnRegister} onPress={this.showRegisterPage}>
                                <Text style={styles.text}>Register Now!</Text>
                            </TouchableOpacity>

                        </View>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </SafeAreaView>
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
    backgroundContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:null,
        height:null,
    },
    logo: {
        width: 120,
        height:120
    },
    logoContainer :{
        alignItems:'center',
        marginBottom: 50
    },
    logoText:{
        color: 'white',
        fontSize: 20,
        fontWeight:'500',
        marginTop: 10,
        opacity: 0.5
    },
    inputContainer :{
        marginTop: 10
    },
    input:{
        justifyContent:'center',
        width: WIDTH - 55,
        height: 45,
        borderRadius: 25,
        fontSize:16,
        paddingLeft: 45,
        backgroundColor: 'rgba(0,0,0,0.35)',
        color: 'rgba(255,255,255,0.7)',
        marginHorizontal:25

    },
    inputIcon :{
        position : 'absolute',
        top:8,
        left:37
    },
    btnEye:{
        position: 'absolute',
        top:8,
        right:37
    },
    btnLogin:{
        width: WIDTH - 55,
        height: 45,
        marginHorizontal:25,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent:'center',
        marginTop:20
    },
    btnRegister:{
        width: WIDTH - 55,
        height: 45,
        marginHorizontal:25,
        borderRadius: 25,
        backgroundColor: '#432577',
        justifyContent:'center',
        marginTop:3,

    },
    text:{
        color:'rgba(255,255,255,0.7)',
        fontSize:16,
        textAlign: 'center'
    },
    textWhite :{
        color:'#fff'
    },
    signUp :{
        marginTop:3,
        alignItems:'center'
    },
});