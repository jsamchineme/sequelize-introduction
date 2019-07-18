import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import userRoutes from './routes/users';
import groupRoutes from './routes/groups';
import postRoutes from './routes/posts';

const app = express();

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  return res.status(200).send({
    message: 'Welcome to Sequelize Introduction Class'
  });
});

app.use('/users', userRoutes);
app.use('/groups', groupRoutes);
app.use('/posts', postRoutes);

app.use('*', (req, res) => {
  return res.status(200).send({
    error: 'Route not found'
  });
});

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`app listening on port ${port}`));