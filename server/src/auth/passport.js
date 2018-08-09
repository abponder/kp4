import passport from 'passport';
import { Strategy } from 'passport-local';
import passportJWT from 'passport-jwt';

import UserModel from './../models/user';

const JWTStrategy = passportJWT.Strategy;
const { ExtractJWT } = passportJWT;

// TODO: refactor to get the query out into a separate file
// also try to use a promise instead of cb
passport.use(new Strategy(
  {
    usernameField: 'email',
    passwordField: 'password',
  },
  ((email, password, cb) =>
  // this one is typically a DB call. Assume that the returned user object is
  // pre-formatted and ready for storing in JWT
    UserModel.findOne({ email, password })
      .then((user) => {
        if (!user) {
          return cb(null, false, { message: 'Incorrect email or password.' });
        }
        return cb(null, user, { message: 'Logged In Successfully' });
      })
      .catch(err => cb(err))
  ),
));


passport.use(new JWTStrategy(
  {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'kpseanalexarthur',
  },
  ((jwtPayload, cb) =>

  // find the user in db if needed. This functionality may
  // be omitted if you store everything you'll need in JWT payload.
    UserModel.findOneById(jwtPayload.id)
      .then(user => cb(null, user))
      .catch(err => cb(err))
  ),
));
