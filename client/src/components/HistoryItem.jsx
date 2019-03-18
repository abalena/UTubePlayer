import React from 'react';

export default class HistoryItem extends React.Component{
  constructor(props){
    super(props)
    this.video = this.props.video;
  }
  onDelete = () => {
    this.props.onVideoDelete(this.video);
  }
  render(){
    return(
      <div>
        <div>
          {this.video.snippet.title}
        </div>
        <button onClick={this.onDelete}>Delete</button>
      </div>
    )
  }
}
