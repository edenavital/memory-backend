import express, { Application } from 'express';
import gameRouter from './routes/game.routes';
// Global Error Handler

// Development logging

export const app: Application = express();

// if (process.env.NODE_ENV === 'development') {
//     app.use(morgan('dev'));
//   }

app.use('/api', gameRouter);

// Body parser, reading data from body into req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
