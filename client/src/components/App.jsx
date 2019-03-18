import React from 'react';
import api from '../api/index.js';
import user from '../../etc/user.json';
import SearchBar from './SearchBar.jsx';
import VideoList from './VideoList.jsx';
import VideoDetail from './VideoDetail.jsx';
import HistoryList from './HistoryList.jsx';

import '../style/style.css';

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      videos: [],
      selectedVideo: null,
      historyList: []
    }
  }
  handleSubmit = async(itemFromSearchBar) => {
    const response = await api.findVideo(itemFromSearchBar)
    this.setState({
      videos: response.data.items
    });
  }

    handleVideoSelect = (video) => {
      this.setState({selectedVideo: video});
      api.addVideo({
        videoId: video.id.videoId,
        videoTitle: video.snippet.title,
        userId: user.userId
      })
    }

    handleVideoDelete = (video) => {
        api.deleteVideo(filmId)
    }
    loadHistory = async () => {
      const res = await api.listOfHistory(user.userId);
      this.setState({historyList: res});
    }

  render(){
    return(
      <div className="App">
        <SearchBar handleSubmit={this.handleSubmit} />
        <div className="main">
          <button onClick={this.loadHistory}>Load</button>
          <HistoryList onVideoDelete={this.handleVideoDelete} videos={this.state.historyList} />
          <VideoDetail video={this.state.selectedVideo}  />
          <div>
            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    )
  }
}
