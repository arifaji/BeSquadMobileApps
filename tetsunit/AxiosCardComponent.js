import React,{ Component } from 'react';
import {StyleSheet, Button, View, Text, Image, ScrollView} from 'react-native';
import {getCustomerList} from "../src/container/service/CustomerService";


export default class AxiosCardComponent extends Component{

    constructor(props){
        super(props);
        this.state = {
            names: []
        }
    }

    render() {
        return (
            <View style={{marginTop: '10%'}}>

                <Button title='Get' onPress={ () => {this.fetchCustomer()}} />

                        <ScrollView style={{maxHeight: 220}}>
                            {
                                this.state.names.map((name, index) => (
                                    <View key = {name.customerNumber} style = {styles.item}>
                                        <Text>{name.firstName} {name.lastName}</Text>
                                    </View>
                                ))
                            }
                        </ScrollView>



            </View>

        )
    }
    async fetchCustomer(){
        const response = await getCustomerList();
        this.setState({names : response.data.values})
    }

}

const styles = StyleSheet.create({
    topNavBar: {
        backgroundColor: '#011638',
        elevation: 2,
        flexDirection: 'row',
        alignItems: 'center'
    },
    logo: {
        height: 100,
        width: 100,
    },
    cardStyle:{
        flex:9,
        margin:10,
    },
    Content: {
        backgroundColor: '#3bf67f',

    },
    item: {
        padding: 30,
        margin: 2,
        borderColor: '#2a4944',
        borderWidth: 1,
        backgroundColor: '#B6E1F2'
    }
});