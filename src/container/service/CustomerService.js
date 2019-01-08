// import React from 'react';
// import axios from 'axios';
//
// const ParentUri = '10.0.2.2:3000/customer';
//
// export function getCustomer() {
//     const url = ParentUri + 's';
//     return axios.get(url)
// }
//
// export function postCustomer(data) {
//     const url = ParentUri ;
//     return axios.post(url, data)
// }

import axios from 'axios';

const urlList = 'http://192.168.1.23:3000/customers';

export  function getCustomerList() {
    return axios.get(urlList);
}
const url = 'http://192.168.1.23:3000/customers';
export function postCustomer(){
    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .then(response => console.log('Success:', JSON.stringify(response)))
        .catch(error => console.error('Error:', error));
}