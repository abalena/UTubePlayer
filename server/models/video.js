import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const videoSchema = new Schema({
  videoId: {type: String, required: true},
  videoTitle: {type: String, required: true}
});

const Video = mongoose.model('Video', videoSchema);
