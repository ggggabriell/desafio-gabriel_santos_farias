import 'dotenv/config';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import cors from 'cors';
import routes from './routes';
import AppError from '@shared/errors/AppError';

import mongoose from 'mongoose';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.statusCode).json({
        status: 'error',
        message: error.message,
      });
    }

    console.log(error);

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  },
);

const connectUrl =
  'mongodb://admin:admin@ac-fsauju5-shard-00-00.0m4skaz.mongodb.net:27017,ac-fsauju5-shard-00-01.0m4skaz.mongodb.net:27017,ac-fsauju5-shard-00-02.0m4skaz.mongodb.net:27017/?ssl=true&replicaSet=atlas-nsykv7-shard-0&authSource=admin&retryWrites=true&w=majority';
const connectConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
};

mongoose
  .connect(connectUrl, connectConfig)
  .then(() => {
    console.log('+++ Database connected! +++');
    app.listen(3333);
  })
  .catch((err: any) => {
    console.log(err);
  });
