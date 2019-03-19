import mongoose from 'mongoose';
import '../models/video';
import config from '../etc/config.json';

const Video = mongoose.model('Video');

function setUpConnection(){
  mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}
setUpConnection();

export function listOfVideos(userId){
  return Video.find({userId: userId}).sort({date: -1});
}

export function addVideoToHistory(data){
  const video = new Video({
    videoTitle: data.videoTitle,
    videoId: data.videoId,
    userId: data.userId,
    date: new Date()
  });
  return video.save();
}


export function deleteVideo(id){
  return Video.findById(id).deleteOne();
}
