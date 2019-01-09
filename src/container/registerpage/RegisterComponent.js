import React from 'react'
import {
    View, Image,
    Text, StyleSheet,
    ImageBackground,
    TextInput,
    Dimensions, SafeAreaView, KeyboardAvoidingView, TouchableOpacity, ScrollView, Button
} from 'react-native';

import bgImage from '../../../assets/spacewallpaper.jpg';
import Icon from 'react-native-vector-icons/Ionicons'
import Icona from 'react-native-vector-icons/Zocial'
import IconMaterial from 'react-native-vector-icons/MaterialIcons'
import IconEntypo from 'react-native-vector-icons/Entypo'
import IconMacom from 'react-native-vector-icons/MaterialCommunityIcons'

const {width: WIDTH} = Dimensions.get('window')
export default class RegisterComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPass: true,
            press: false,
            customer:[{
                firstname: '',
                lastname: '',
                gender:'',
                address:'',
                phonenumber:'',
                email:'',
                username:'',
                password:'',

            }]
        }
    }

    showPass = () => {
        if (this.state.press == false){
            this.setState({showPass:false, press:true})
        } else {
            this.setState({showPass:true, press:false})
        }
    }

    updateValue(text, field){
        if(field=='firstname' && field!==" "){
            this.setState({firstname:text})
        }
        if(field=='lastname' && field!==" "){
            this.setState({lastname:text})
        }
        if(field=='gender' && field!==" "){
            this.setState({gender:text})
        }
        if(field=='address' && field!==" "){
            this.setState({address:text})
        }
        if(field=='phonenumber' && field!==" "){
            this.setState({phonenumber:text})
        }
        if(field=='email' && field!==" "){
            this.setState({email:text})
        }
        if(field=='username' && field!==" "){
            this.setState({username:text})
        }
        if(field=='password' && field!==" "){
            this.setState({password:text})
        }

    }

    submit(){
        let customer={}
            customer.firstname=this.state.firstname,
            customer.lastname=this.state.lastname,
            customer.gender=this.state.gender,
            customer.address=this.state.address,
            customer.phonenumber=this.state.phonenumber,
            customer.email=this.state.email,
            customer.username=this.state.username,
            customer.password=this.state.password


        var url = 'http://192.168.1.36:7000/api/customer';

        fetch(url,{
            method: 'POST', // or 'PUT'
            body: JSON.stringify(customer),
            headers:{
                'Content-Type':'application/json'
            }
        }).then(res => res.json())
            .then((response) => {
               console.log('Succes:',JSON.stringify(response))
                this.props.navigation.navigate('SignIn');
            })
            .catch(error => console.error('Error:',error));
    }

    render(){
        return(
            <SafeAreaView style={styles.backgroundContainer}>
                <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                    <KeyboardAvoidingView behavior='padding' style={styles.backgroundContainer}>
                        <ScrollView style={{marginTop:'10%'}} >
                        <View style={styles.inputContainer}>
                            <IconMaterial name={'person-pin'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                            style={styles.inputIcon}/>
                            <TextInput
                                style={styles.input}
                                placeholder={'First Name'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.updateValue(text,'firstname')}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <IconMaterial name={'person-pin'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                                  style={styles.inputIcon}/>
                            <TextInput
                                style={styles.input}
                                placeholder={'Last Name'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.updateValue(text,'lastname')}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <IconMacom name={'human-male-female'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                                          style={styles.inputIcon}/>
                            <TextInput
                                style={styles.input}
                                placeholder={'Gender'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.updateValue(text,'gender')}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <IconEntypo name={'location'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                                  style={styles.inputIcon}/>
                            <TextInput
                                style={styles.input}
                                placeholder={'Address'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.updateValue(text,'address')}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <IconMaterial name={'phone-iphone'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                                  style={styles.inputIcon}/>
                            <TextInput
                                style={styles.input}
                                placeholder={'Phone Number'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.updateValue(text,'phonenumber')}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <IconMaterial name={'email'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                                          style={styles.inputIcon}/>
                            <TextInput
                                style={styles.input}
                                placeholder={'E-Mail'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.updateValue(text,'email')}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <Icon name={'ios-person'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                                  style={styles.inputIcon}/>
                            <TextInput
                                style={styles.input}
                                placeholder={'Username'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.updateValue(text,'username')}
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
                                onChangeText={(text) => this.updateValue(text,'password')}
                            />

                            <TouchableOpacity style={styles.btnEye} onPress={this.showPass.bind(this)}>
                                <Icon name={this.state.press == false ? 'md-eye':'md-eye-off'} size={26} color={'rgba(255, 255, 255, 0.6)'}/>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.btnLogin} onPress={() => this.submit()} >
                                <Text style={styles.text}>Sign Up</Text>
                            </TouchableOpacity>

                        </View>
                        </ScrollView>
                    </KeyboardAvoidingView>
                </ImageBackground>
            </SafeAreaView>
        );
    }
    signInAsync = async () => {
        this.props.navigation.navigate('SignIn');
    };


}
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width:WIDTH,
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
    text:{
        color:'rgba(255,255,255,0.7)',
        fontSize:16,
        textAlign: 'center'
    }
});