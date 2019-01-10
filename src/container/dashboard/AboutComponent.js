import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage,
    SafeAreaView,
    ImageBackground,
    KeyboardAvoidingView, ScrollView, TextInput, Dimensions, Image
} from 'react-native'
import {Header,Card,Button,Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import bgImage from '../../../assets/spacewallpaper.png';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFa from 'react-native-vector-icons/FontAwesome';
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons';

export default class AboutComponent extends Component {
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

    render(){
        return(
                <ImageBackground source={bgImage} style={styles.backgroundContainer}>

                        <Header
                            leftComponent={
                                <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}>
                                    <Icon name={'ios-menu'} size={26} color={'#fff'}/>
                                </TouchableOpacity>
                            }
                            centerComponent={{ text: 'About', style: { color: '#fff' } }}
                            rightComponent={
                                <TouchableOpacity onPress={this._signOutAsync}>
                                    <IconCom name={'logout-variant'} size={26} color={'#fff'}/>
                                </TouchableOpacity>
                            }
                            containerStyle={{
                                backgroundColor: 'rgba(57, 151, 171, 0.3)',
                                justifyContent: 'space-around',
                            }}
                        />

                    <View style={styles.cardBig}>

                        <View style={{alignItems:'center',marginLeft: 30,marginRight: 30}}>
                            <Image style={{width:200,height:200}} source={require('../../../assets/LogoJenius.png')} />
                            <Text style={{color:'rgba(0,0,0,0.7)',fontSize:30}}>Bank Bank Mobile</Text>
                            <Text>Version 1.0.0</Text>
                            <View style={{flexDirection:'row'}}>
                                <Text>Made with </Text>
                                <IconFa name={'heart'} style={{color:'#ff32df',marginTop:2}} size={16} />
                                <Text> by BeSquad</Text>
                            </View>

                        </View>
                    </View>

                </ImageBackground>

        );
    }
    showPass = () => {
        if (this.state.press == false){
            this.setState({showPass:false, press:true})
        } else {
            this.setState({showPass:true, press:false})
        }
    }
    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}
const {width: WIDTH} = Dimensions.get('window')
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
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
    },
    cardBig:{
        borderRadius:20,
        backgroundColor:'rgba(255, 255, 255, 0.5)',
        marginHorizontal:15,
        paddingVertical: 15,
        marginTop:15,
        elevation:1,
        shadowColor: '#000'
    },
    infoHistory:{
        borderTopWidth: 1,
        borderTopColor:'rgba(0,0,0,0.1)',
        backgroundColor:'rgba(255,255,255,0.1)',
        marginHorizontal:3

    },
});
