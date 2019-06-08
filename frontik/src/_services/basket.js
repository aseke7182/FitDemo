import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.getItem('token')
    }
});

export function createbaskett(status, ma){
    return http.post('basket/', {
        status: status,
        ma: ma
    })
}

export function sendmessage(text,email){
    return http.post('send/',{
        text: text,
        dest: email
    })
}