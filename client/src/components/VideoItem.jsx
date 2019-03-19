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
        <img onClick={this.onSelect} src={this.video.snippet.thumbnails.medium.url}></img>
        <h6 id="title">{this.video.snippet.title}</h6>
      </div>
    )
  }
}
