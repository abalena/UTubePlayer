import mongoose from 'mongoose';
import '../models/video';
import config from '../etc/config.json';

const Video = mongoose.model('Video');

function setUpConnection(){
  mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`);
}
setUpConnection();
