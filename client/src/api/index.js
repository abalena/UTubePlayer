import axios from 'axios';

const KEY = 'AIzaSyAb2DpSZw9P8SpDcjiLQ0emH5F65FGyJzI';

export default{
  findVideo(param){
    const params = axios.create({
      baseURL: 'https://www.googleapis.com/youtube/v3/',
      params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
      }
  })
    return params.get(`/search`, {
      params: {
        q: param
      }
    })
  },
  listOfVideos(){
    return axios.get(`${apiPrefix}/player/:userId`);
  },
  addVideo(data){
    return axios.post(`${apiPrefix}/player`, data);
  },
  deleteVideo(videoId){
    return axios.delete(`${apiPrefix}/player/${filmId}`);
  }
}
