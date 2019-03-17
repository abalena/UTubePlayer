import express from 'express';
import config from './etc/config.json';

const app = express();

app.get('/player', (req, res) => {
  res.send('Hello World');
});


app.listen(config.serverPort, () => console.log('Listening on port ' + config.serverPort));
