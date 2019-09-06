import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: 'Client-ID a0fe55f0593b2b4456ce67eca10ecdd5d554573093556c683d0b4b6a5c412c97'
    },
});