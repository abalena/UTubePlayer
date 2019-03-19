import express from 'express';
import config from './etc/config.json';
import * as db from './utils/DataBaseUtils.js';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/player/:userId', (req, res) => {
  db.listOfVideos(req.params.userId).then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err)
    res.send("Can't get list of videos because of unexpected error")
  })
});

app.post('/player', (req, res) => {
  db.addVideoToHistory(req.body).then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err)
    res.send("Can't add video because of unexpected error")
  });
});

app.delete('/player/:id', (req, res) => {
  db.deleteVideo(req.params.id).then(data => {
    res.send(data);
  })
  .catch(err => {
    console.log(err)
    res.send("Can't delete video because of unexpected error");
  });
});

app.listen(config.serverPort, () => console.log('Listening on port ' + config.serverPort));
