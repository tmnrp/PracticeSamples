import axios from 'axios';

export const categoryAxios = axios.create({
    baseURL: 'http://localhost:8080/category'
});

export const moviesAxios = axios.create({
    baseURL: 'http://localhost:8080/movies'
});