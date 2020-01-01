import axiosvidoes from 'axios';

export default axiosvidoes.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        someParam: 'tony'
    }
});