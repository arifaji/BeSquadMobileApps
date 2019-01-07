import React from 'react';
import axios from 'axios';

const ParentUri = '10.0.2.2:3000/customer';

export function getCustomer() {
    const url = ParentUri + 's';
    return axios.get(url)
}

export function postCustomer(data) {
    const url = ParentUri ;
    return axios.post(url, data)
}