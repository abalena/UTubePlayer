import React from 'react';
import api from '../api/index.js';
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
      selectedVideo: null
    }
  }
  handleSubmit = async(itemFromSearchBar) => {
    const response = await api.findVideo(itemFromSearchBar)
    this.setState({
      videos: response.data.items
    });
  };

    handleVideoSelect = (video) => {
      console.log("App");
      this.setState({selectedVideo: video})

    }
  render(){
    return(
      <div className="App">
        <SearchBar handleSubmit={this.handleSubmit} />
        <div className="main">
          <HistoryList />
          <VideoDetail video={this.state.selectedVideo}  />
          <div>
            <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
          </div>
        </div>
      </div>
    )
  }
}
