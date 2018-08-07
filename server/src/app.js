import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import chalk from 'chalk';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(cors({
  allowedHeaders: 'Content-Type, authorization',
  methods: ['GET, POST, PUT, DELETE', 'OPTIONS'],
}));

/**
 * if the node env is in production then w're serving from the transpiled folder
 * at dis/client/index
 * in production, server would serve static at port 3333 no client server
 * in dev server would be running on 3333 and serving static as well as
 * the client running on 3000
 * for more info refer to the readme.md
 */

const staticPathOffset = process.env.NODE_ENV === 'production' ? '../' : '';


app.get('/api/hello', (req, res) => {
  console.log(chalk.bgBlue('I was hit'));
  res.send(JSON.stringify({ word: 'Hello world' }));
});

app.use(express.static(path.join(__dirname, `/../../${staticPathOffset}client/build/`)));
// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, `/../../${staticPathOffset}client/build/`, 'index.html'));
});


app.listen(process.env.PORT, () => {
  console.log(chalk.blue('listening on port:', chalk.green.bold(process.env.PORT)));
});