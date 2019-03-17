import React from 'react';

export default class VideoItem extends React.Component{
  constructor(props){
    super(props)
    this.video = this.props.video;
  }

  onSelect = () => {
    this.props.handleVideoSelect(this.video)
  }
  render(){
    return(
      <div className="VideoItem">
        <div id="video">
          <img src={this.video.snippet.thumbnails.medium.url}></img>
        </div>
        <div id="title">{this.video.snippet.title}</div>
        <div id="button">
          <button onClick={this.onSelect}>Play</button>
        </div>
      </div>
    )
  }
}
