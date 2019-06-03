import axios from 'axios';

export function login( username, password ){
    return axios.post('http://localhost:8000/api/login/',{ username: username, password: password });
}