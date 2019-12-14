import axios from 'axios';

const KEY = 'AIzaSyCFzX8_VXXKQgjRcR0SdAx7YuM6wvP0QMY';
export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params : {
        part : 'snippet',
        maxResult : 10,
        key : KEY
    }
});
