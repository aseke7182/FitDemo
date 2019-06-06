import axios from 'axios'

const http = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.getItem('token')
    }
});

export  function loginn(username,password){
    return axios.post('http://localhost:8000/api/login/',{
        username: username,
        password: password
    });
}

export function logoutt(){
    return http.post('logout/',{})
}