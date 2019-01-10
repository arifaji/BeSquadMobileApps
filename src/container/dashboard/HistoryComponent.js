import React, {Component} from 'react'
import {
    View,
    StyleSheet,
    TouchableOpacity,
    AsyncStorage,
    SafeAreaView,
    ImageBackground,
    KeyboardAvoidingView, ScrollView, TextInput, Dimensions
} from 'react-native'
import {Header,Card,Button,Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons'
import bgImage from '../../../assets/spacewallpaper.png';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconFa from 'react-native-vector-icons/FontAwesome';
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons';

export default class HistoryComponent extends Component {
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
                            centerComponent={{ text: 'History', style: { color: '#fff' } }}
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

                        <View style={styles.infoHistory}>
                            <View style={{margin:10}}>
                                <View >
                                    <Text style={{color:'#5f67f4',fontSize:20}}>Current Account</Text>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text style={styles.textSmall}>Account Number</Text>
                                        <Text style={styles.textSmall}>Current Balance</Text>
                                    </View>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text>8899765</Text>
                                        <Text>Rp. 10.000.000,-</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    <ScrollView>

                        <View style={styles.infoHistory}>
                            <View style={{margin:10}}>
                                <View >
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text style={styles.textSmall}>Trx.ID:0989</Text>
                                        <Text style={styles.textSmall}>Cash In</Text>
                                        <Text style={styles.textSmall}>12-Nov-2018</Text>
                                    </View>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text>6278798</Text>
                                        <Text>Credit</Text>
                                        <Text>Rp. 100.000,-</Text>
                                    </View>
                                </View>
                            </View>
                        </View>



                        <View style={styles.infoHistory}>
                            <View style={{margin:10}}>
                                <View >
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text style={styles.textSmall}>Trx.ID:0988</Text>
                                        <Text style={styles.textSmall}>Cash Out</Text>
                                        <Text style={styles.textSmall}>11-Nov-2018</Text>
                                    </View>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text>5678353</Text>
                                        <Text>Debit</Text>
                                        <Text>Rp. 50.000,-</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.infoHistory}>
                            <View style={{margin:10}}>
                                <View >
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text style={styles.textSmall}>Trx.ID:0987</Text>
                                        <Text style={styles.textSmall}>Cash In</Text>
                                        <Text style={styles.textSmall}>10-Nov-2018</Text>
                                    </View>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text>6278798</Text>
                                        <Text>Credit</Text>
                                        <Text>Rp. 10.000,-</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.infoHistory}>
                            <View style={{margin:10}}>
                                <View >
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text style={styles.textSmall}>Trx.ID:0986</Text>
                                        <Text style={styles.textSmall}>Cash In</Text>
                                        <Text style={styles.textSmall}>12-Nov-2018</Text>
                                    </View>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text>1454534</Text>
                                        <Text>Debit</Text>
                                        <Text>Rp. 90.000,-</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.infoHistory}>
                            <View style={{margin:10}}>
                                <View >
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text style={styles.textSmall}>Trx.ID:0985</Text>
                                        <Text style={styles.textSmall}>Cash In</Text>
                                        <Text style={styles.textSmall}>09-Nov-2018</Text>
                                    </View>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text>8694758</Text>
                                        <Text>Credit</Text>
                                        <Text>Rp. 300.000,-</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.infoHistory}>
                            <View style={{margin:10}}>
                                <View >
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text style={styles.textSmall}>Trx.ID:0989</Text>
                                        <Text style={styles.textSmall}>Cash In</Text>
                                        <Text style={styles.textSmall}>12-Nov-2018</Text>
                                    </View>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text>6278798</Text>
                                        <Text>Creditos</Text>
                                        <Text>Rp. 100.000,-</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.infoHistory}>
                            <View style={{margin:10}}>
                                <View >
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text style={styles.textSmall}>Trx.ID:0989</Text>
                                        <Text style={styles.textSmall}>Cash In</Text>
                                        <Text style={styles.textSmall}>12-Nov-2018</Text>
                                    </View>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text>6278798</Text>
                                        <Text>Creditos</Text>
                                        <Text>Rp. 100.000,-</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.infoHistory}>
                            <View style={{margin:10}}>
                                <View >
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text style={styles.textSmall}>Trx.ID:0989</Text>
                                        <Text style={styles.textSmall}>Cash In</Text>
                                        <Text style={styles.textSmall}>12-Nov-2018</Text>
                                    </View>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text>6278798</Text>
                                        <Text>Creditos</Text>
                                        <Text>Rp. 100.000,-</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.infoHistory}>
                            <View style={{margin:10}}>
                                <View >
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text style={styles.textSmall}>Trx.ID:0989</Text>
                                        <Text style={styles.textSmall}>Cash In</Text>
                                        <Text style={styles.textSmall}>12-Nov-2018</Text>
                                    </View>
                                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                                        <Text>6278798</Text>
                                        <Text>Creditos</Text>
                                        <Text>Rp. 100.000,-</Text>
                                    </View>
                                </View>
                            </View>
                        </View>

                    </ScrollView>

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
        alignItems: 'center',

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
    infoHistory:{
        elevation: 1,
        shadowColor: '#000',
        backgroundColor:'rgba(255,255,255,0.7)',
        width:WIDTH
    },
    textSmall:{
        color:'rgba(0,0,0,0.5)',
        fontSize:12
    }
});
