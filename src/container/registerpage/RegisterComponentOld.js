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

const {width: WIDTH} = Dimensions.get('window')
export default class RegisterComponentOld extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPass: true,
            press: false,
            customer:[{
                customerNumber:'',
                firstName: '',
                lastName: '',
                birthDate:'',
                username:'',
                password:'',
                phoneType:'',
                phoneNumber:''
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
        if(field=='firstName' && field!==" "){
            this.setState({firstName:text})
        }
        if(field=='lastName' && field!==" "){
            this.setState({lastName:text})
        }
        if(field=='birthDate' && field!==" "){
            this.setState({birthDate:text})
        }
        if(field=='username' && field!==" "){
            this.setState({username:text})
        }
        if(field=='password' && field!==" "){
            this.setState({password:text})
        }
        if(field=='phoneType' && field!==" "){
            this.setState({phoneType:text})
        }
        if(field=='phoneNumber' && field!==" "){
            this.setState({phoneNumber:text})
        }
    }

    submit(){
        let customer={}
            customer.firstName=this.state.firstName,
            customer.lastName=this.state.lastName,
            customer.birthDate=this.state.birthDate,
            customer.username=this.state.username,
            customer.password=this.state.password,
            customer.phoneType=this.state.phoneType,
            customer.phoneNumber=this.state.phoneNumber

        var url = 'http://192.168.1.26:3000/customer';

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
                                onChangeText={(text) => this.updateValue(text,'firstName')}
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
                                onChangeText={(text) => this.updateValue(text,'lastName')}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <IconMaterial name={'date-range'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                                  style={styles.inputIcon}/>
                            <TextInput
                                style={styles.input}
                                placeholder={'Birth Date'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.updateValue(text,'birthDate')}
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
                                onChangeText={(text) => this.updateValue(text,'phoneNumber')}
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <IconMaterial name={'phone-iphone'} size={28} color={'rgba(255, 255, 255, 0.7)'}
                                          style={styles.inputIcon}/>
                            <TextInput
                                style={styles.input}
                                placeholder={'Phone Type'}
                                placeholderTextColor={'rgba(255, 255, 255, 0.7)'}
                                underlineColorAndroid='transparent'
                                onChangeText={(text) => this.updateValue(text,'phoneType')}
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
    text:{
        color:'rgba(255,255,255,0.7)',
        fontSize:16,
        textAlign: 'center'
    }
});