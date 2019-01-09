import React, {Component} from 'react'
import {
    View,
    ImageBackground,
    StyleSheet,
    TouchableOpacity,
    Image,
    ScrollView,
    AsyncStorage,
    Dimensions,
    SafeAreaView
} from 'react-native'
import {Header,Card,Button,Text} from "react-native-elements";
import Icon from 'react-native-vector-icons/Ionicons'
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons'

import bgImage from '../../../assets/spacewallpaper.png';
export default class DashboardComponent extends Component {

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
            <ImageBackground source={bgImage} style={styles.backgroundContainer}>
                <View>

                    <Header
                        leftComponent={
                            <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}>
                                <Icon name={'ios-menu'} size={26} color={'#fff'}/>
                            </TouchableOpacity>
                        }
                        centerComponent={{ text: 'Dashboard', style: { color: '#fff' } }}
                        // rightComponent={
                        //     <TouchableOpacity onPress={this._signOutAsync}>
                        //         <IconCom name={'logout-variant'} size={26} color={'#fff'}/>
                        //     </TouchableOpacity>
                        // }
                        containerStyle={{
                            backgroundColor: '#3d9eaf',
                            justifyContent: 'space-around',
                        }}
                    />

                    <ScrollView>
                    {/*<Card>*/}
                        {/*<View style={{flexDirection:'row'}}>*/}
                            {/*<Image style={{width:100,height:100}} source={require('../../../assets/icnbalance.png')} />*/}
                            {/*<View style={{marginLeft:10,justifyContent:'center'}}>*/}
                                {/*<Text style={{fontSize:20}}>*/}
                                    {/*Saldo Kamu :*/}
                                {/*</Text>*/}
                                {/*<Text style={{fontSize:16}}>*/}
                                    {/*Rp. 500.000,-*/}
                                {/*</Text>*/}
                            {/*</View>*/}
                        {/*</View>*/}
                    {/*</Card>*/}

                    <View style={styles.cardBig}>
                        <View style={{flexDirection:'row',marginLeft: 30}}>
                            <Image style={{width:100,height:100}} source={require('../../../assets/icnbalance.png')} />
                            <View style={{marginLeft:10,justifyContent:'center'}}>
                                <Text style={{fontSize:20}}>
                                    Saldo Kamu :
                                </Text>
                                <Text style={{fontSize:16}}>
                                    Rp. 500.000,-
                                </Text>
                            </View>
                        </View>
                    </View>

                        <View  style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <View style={styles.cardLeft}>
                                <TouchableOpacity onPress={this.showTransactionPage}>
                                    <View style={{alignItems:'center'}}>
                                        <Image style={{width:100,height:100}} source={require('../../../assets/icntransaksi.png')} />
                                        <Text>Transaksi</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.cardRight}>
                                <TouchableOpacity onPress={this.showHistoryPage}>
                                    <View style={{alignItems:'center'}}>
                                        <Image style={{width:100,height:100}} source={require('../../../assets/icnhistory.png')} />
                                        <Text>History</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View  style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <View style={styles.cardLeft}>
                                <TouchableOpacity onPress={this.showProfilePage}>
                                    <View style={{alignItems:'center'}}>
                                        <Image style={{width:100,height:100}} source={require('../../../assets/icnprofile.png')} />
                                        <Text>Profile</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.cardRight}>
                                <TouchableOpacity onPress={this.showAboutPage}>
                                    <View style={{alignItems:'center'}}>
                                        <Image style={{width:100,height:100}} source={require('../../../assets/icnabout.png')} />
                                        <Text>About</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>


                    </ScrollView>

                </View>
    </ImageBackground>

        );
    }
    showTransactionPage = () => {
        this.props.navigation.navigate('Transaction');
    };

     showHistoryPage = () => {
         this.props.navigation.navigate('History');
     };

     showProfilePage = () => {
         this.props.navigation.navigate('Profile');
     };
     showAboutPage = () => {
         this.props.navigation.navigate('About');
     };



    _signOutAsync = async () => {
        await AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    };
}
const {width: WIDTH} = Dimensions.get('window')
const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        width: WIDTH,
        height: null,
    },
    cardRight:{
        borderRadius:20,
        backgroundColor:'rgba(255, 255, 255, 0.7)',
        marginTop:15,
        marginRight: 10,
        padding:20,
        alignItems:'center',
        justifyContent:'center'
    },
    cardLeft:{
        borderRadius:20,
        backgroundColor:'rgba(255, 255, 255, 0.7)',
        marginTop:15,
        marginLeft: 10,
        padding:20,
        alignItems:'center',
        justifyContent:'center'
    },
    cardBig:{
        borderRadius:20,
        backgroundColor:'rgba(255, 255, 255, 0.7)',
        marginHorizontal:15,
        paddingVertical: 15,
        marginTop:15
    },
});