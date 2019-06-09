import axios from 'axios';

const http = axios.create({
    baseURL: 'http://localhost:8000/api/',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Token ' + localStorage.getItem('token')
    }
});

export function getAllUserFavorites(){
    return http.get('favorites/');
}

export function updateFavorite(favoriteId, ma){
    return http.put('favorites/'+favoriteId+'/' ,{
        ma: ma
    })
}