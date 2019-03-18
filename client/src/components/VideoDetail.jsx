import React from 'react';

export default class VideoDetail extends React.Component{

  playVideo(){
    const video = this.props.video;
    let videoSrc = null;
    if(video){
      videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
      return(
          <div>
            <div>
              <iframe src={videoSrc} allowFullScreen title='Video player' width="640" height="360"/>
            </div>
            <div>
              <h4>{video.snippet.title}</h4>
            </div>
           </div>
         )
       }
  }

  render(){
    return(
      <div className="VideoDetail">{this.playVideo()}</div>
    )
  }
}
