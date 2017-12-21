import config from './config';
import apiRouter from './api';
import express from 'express';

const server = express();

server.get('/', (req, res) => {
  res.send('Hello World');
});

server.get('/about.html', (req, res) => {
  res.send('About page');
})

server.use(express.static('public'));
server.use('/api', apiRouter);


server.listen(config.port, () => {
  console.info('Port is ', config.port);
});

