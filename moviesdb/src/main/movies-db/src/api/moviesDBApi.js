import axios from 'axios';

export const categoryAxios = axios.create({
    baseURL: 'http://localhost:8080/categories'
});

export const moviesAxios = axios.create({
    baseURL: 'http://localhost:8080/movies'
});

export const moviesDBAxios = axios.create({
    baseURL: 'http://localhost:8080/moviesdb'
});