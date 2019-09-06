import axios from 'axios';

// const KEY = 'AIzaSyA3ZuPnycnkyXtt3NQKM-tQGV-95J_3dGE';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    // params: {
    //     part: 'snippet',
    //     maxResults: 5,
    //     key: KEY
    // } params not working in the latest version~~~
})