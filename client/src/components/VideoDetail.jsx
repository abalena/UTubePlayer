import React from 'react';

const VideoDetail = ({video}) => {
  let videoSrc = null;
    if(video){
      videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
        <div className="VideoDetail">
            <div>
                <iframe src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div>
                <h4>{video.snippet.title}</h4>
            </div>
        </div>

    )
  }
  return <h6>Find video</h6>
}

export default VideoDetail;
