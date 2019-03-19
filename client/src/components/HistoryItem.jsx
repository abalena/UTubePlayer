import React from 'react';

export default class HistoryItem extends React.Component{
  constructor(props){
    super(props)
    this.video = this.props.video;
  }

  onSelect = () => {
    this.props.handleVideoSelect(this.video)
  }

  onDelete = () => {
    this.props.onVideoDelete(this.video);
  }

  render(){
    return(
      <div className="HistoryItem">
        <span>
          <button onClick={this.onDelete}>Delete</button>
        </span>
        <span onClick={this.onSelect}>
          {this.video.videoTitle}
        </span>
      </div>
    )
  }
}
