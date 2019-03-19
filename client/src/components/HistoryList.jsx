import React from 'react';
import HistoryItem from './HistoryItem.jsx';

export default class HistoryList extends React.Component{

  generateHistoryList(){
    const videos = this.props.videos;
    if(videos){
      return videos.map(video => {
        return(
          <HistoryItem
              key={video._id}
              video={video}
              onVideoDelete={this.props.onVideoDelete}
              handleVideoSelect={this.props.handleVideoSelect}
          />
        )
      })
    }
  }

  render(){
    return(
      <div className="HistoryList">
        <h3>History List</h3>
        <div>{this.generateHistoryList()}</div>
      </div>
    )
  }
}
