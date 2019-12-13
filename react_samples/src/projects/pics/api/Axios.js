import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 698b5409d7c806c6982ec216e65d068f5851b04d470fc6729457ae908b78bb18'
    }
});