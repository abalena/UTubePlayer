import axios from 'axios';

const KEY = 'AIzaSyAb2DpSZw9P8SpDcjiLQ0emH5F65FGyJzI';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})
