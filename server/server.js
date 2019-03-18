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
    console.log(data);
    res.send(data);
  });
});

app.post('/player', (req, res) => {
  console.log(req.body);
  db.addVideoToHistory(req.body).then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send(err)
  });
});

app.delete('/player/:id', (req, res) => {
  db.deleteFilm(req.params.id).then(data => {
    res.send(data);
  })
  .catch(err => {
    res.send(err)
  });
});

app.listen(config.serverPort, () => console.log('Listening on port ' + config.serverPort));
