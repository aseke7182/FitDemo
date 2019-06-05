import axios from 'axios';

var http = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {'Authorization': 'Token ' + localStorage.getItem('token')}
  })

export function login( username, password ){
    return axios.post('http://localhost:8000/api/login/',{ username: username, password: password });
}

export function logout(){
    return http.post('logout/',);
}