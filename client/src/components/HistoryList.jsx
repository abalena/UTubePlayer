import React from 'react';
import HistoryItem from './HistoryItem.jsx';

export default class HistoryList extends React.Component{

  generateHistoryList(){
    const {videos} = this.props.videos;
    if(videos){
      return videos.map(video => {
        return(
          <HistoryItem
              key={video.id.videoId}
              video={video}
          />
        )
      })
    }
  }

  render(){
    return(
      <div className="HistoryList">
        <div>History List</div>
        <div>{this.generateHistoryList()}</div>
      </div>
    )
  }
}
