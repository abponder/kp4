// this is just an example
// TODO: Actually build a user router
import Router from 'express';

const userRouter = Router();

/* GET users listing. */
userRouter.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

/* GET user profile. */
userRouter.get('/profile', (req, res, next) => {
  res.send(req.user);
});

export default userRouter;
