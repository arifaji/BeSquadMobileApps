import React from 'react';
import {StyleSheet,TextInput, Text, View, TouchableOpacity} from 'react-native';
import {postCustomer} from "../src/container/service/CustomerService";

export default class FormCustomer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            customer : {
                firstName : '',
                lastName : '',
                birthDate : '',
                username : '',
                password : '',
                phoneType : '',
                phoneNumber: ''
            }
        }

    }

    handleFirst(value, key) {
        if(key){
            if(key === 'firstName'){
                this.setState({customer: {...this.state.customer, firstName: value}});
            }
            else if(key ==='lastName'){
                this.setState({customer: {...this.state.customer, lastName: value}});
            }
            else if(key ==='birthDate'){
                this.setState({customer: {...this.state.customer, birthDate: value}});
            }
            else if(key ==='username'){
                this.setState({customer: {...this.state.customer, username: value}});
            }
            else if(key ==='password'){
                this.setState({customer: {...this.state.customer, password: value}});
            }
            else if(key ==='phoneType'){
                this.setState({customer: {...this.state.customer, phoneType: value}});
            }
            else {
                this.setState({customer: {...this.state.customer, phoneNumber: value}});
            }
        }

    }

    post = async () =>{
        const data = this.state.customer;
        await postCustomer(data)
        console.log(data);
    }




    render() {
        return(
            <View style={styles.denis} >
                <View style={styles.form} >
                    <TextInput
                        value = {this.state.customer.firstName}
                        style ={styles.input}
                        placeholder ='firstname'
                        onChangeText = {(text)=>(this.handleFirst(text,'firstName'))}
                    />
                    <TextInput
                        value = {this.state.customer.lastName}
                        style ={styles.input}
                        placeholder ='lastname'
                        onChangeText = {(text)=>(this.handleFirst( text, 'lastName'))}
                    />
                    <TextInput
                        style ={styles.input}
                        placeholder ='date'
                        onChangeText = {(text)=>(this.handleFirst(text, 'birthDate' ))}
                    />
                    <TextInput
                        style ={styles.input}
                        placeholder ='username'
                        onChangeText = {(text)=>(this.handleFirst(text, 'username'))}
                    />
                    <TextInput
                        style ={styles.input}
                        placeholder ='pass'
                        onChangeText = {(text)=>(this.handleFirst(text, 'password'))}
                    />
                    <TextInput
                        style ={styles.input}
                        placeholder ='phone type'
                        onChangeText = {(text)=>(this.handleFirst(text, 'phoneType'))}
                    />
                    <TextInput
                        style ={styles.input}
                        placeholder ='phone number'
                        onChangeText = {(text)=>(this.handleFirst(text, 'phoneNumber'))}
                    />

                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress={()=> this.post() }
                    >
                        <Text style = {styles.submitButtonText}> Submit </Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    input: {
        marginLeft: 15,
        marginRight : 15,
        height: 40,
        borderColor: '#6EC180',
        borderWidth: 1,
        borderRadius:10,
        backgroundColor : '#fff',
        padding: 10
    },
    submitButton: {
        backgroundColor: '#51b8ff',
        padding: 10,
        marginTop: 25,
        marginLeft: 15,
        marginRight : 15,
        height: 40,
        borderRadius: 10
    },
    submitButtonText:{
        color: 'white',
        textAlign: 'center',
    },
    denis : {
        flex : 1,
        backgroundColor: "#326362"
    },
    form : {
        flex : 4,
        marginTop : 40
    }

})