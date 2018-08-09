import { Router } from 'express';
import jwt from 'jsonwebtoken';
import passport from 'passport';

const authRouter = Router();

/* POST login. */
authRouter.post('/login', (req, res, next) => {
  passport.authenticate('local', { session: false }, (err, user, info) => {
    if (err || !user) {
      return res.status(400).json({
        message: 'Something is not right',
        user,
      });
    }
    req.login(user, { session: false }, (error) => {
      if (error) {
        res.send(error);
      }
      // generate a signed json web token with the contents of user object and
      // return it in the response
      const token = jwt.sign(user, 'kpseanalexarthur');
      return res.json({ user, token });
    });
  })(req, res);
});

export default authRouter;
