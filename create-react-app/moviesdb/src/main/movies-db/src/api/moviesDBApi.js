import axios from 'axios';

export const moviesDBAxios = axios.create({
    baseURL: 'http://moviesdb:8080/moviesdb'
});