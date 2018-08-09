import express from 'express';
import path from 'path';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import chalk from 'chalk';
<<<<<<< HEAD
import sequelize from 'sequelize';
import db from './models';

=======
import cookieParser from 'cookie-parser';
import passport from 'passport';
import userRouter from './routes/user-router';
import './auth/passport';
>>>>>>> master

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// not sure if we actually need this
app.use(cookieParser());

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

// for the protected route '/user' to go through the passport middleware
// that allows only requests with valid tokens to access
// TODO: replace the following with the code below:
/**
 * // in this file
 * app.use(/protected, protectedRouter);
 *
 *
 * // in /routes/protectedRouter.js
 *
 * import { Router } from 'express';
 * import userRouter from './user-router';
 * const protectedRouter = Router();
 * router.route('/user', userRouter);
 */
app.use('/user', passport.authenticate('jwt', { session: false }), userRouter);


app.use(express.static(path.join(__dirname, `/../../${staticPathOffset}client/build/`)));
// Handle React routing, return all requests to React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, `/../../${staticPathOffset}client/build/`, 'index.html'));
});

// TODO: look into the following
// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


app.listen(process.env.PORT, () => {
  console.log(chalk.blue('listening on port:', chalk.green.bold(process.env.PORT)));
});

// var cache = [];

// console.log(chalk.red('db is ===>', JSON.stringify(db, function(key, value) {
//   if (typeof value === 'object' && value !== null) {
//       if (cache.indexOf(value) !== -1) {
//           // Duplicate reference found
//           try {
//               // If this value does not reference a parent it can be deduped
//               return JSON.parse(JSON.stringify(value));
//           } catch (error) {
//               // discard key if value cannot be deduped
//               return;
//           }
//       }
//       // Store value in our collection
//       cache.push(value);
//   }
//   return value;
// })));


// cache = null;

db.sequelize.sync()
  .then(function () {
    console.log('sequelize is working');
  })
  .catch(err => err && console.log(chalk.red('err while connecting to db', err)));
