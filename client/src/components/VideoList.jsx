import React from 'react';
import VideoItem from './VideoItem.jsx';

export default class VideoList extends React.Component{

  renderVideos(){
    const {videos} = this.props;
    return videos.map(video => {
      if(video.id.kind == "youtube#video"){
        return <VideoItem
                  key={video.id.videoId}
                  video={video}
                  handleVideoSelect={this.props.handleVideoSelect}
                />
        }
    });
  }

  render(){
    return(
      <div className="VideoList">{this.renderVideos()}</div>
    )
  }
}
