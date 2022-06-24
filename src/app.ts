import express, { Application, Request, Response, NextFunction } from 'express';
import { AppError } from './utils/AppError/AppError';
import gameRouter from './routes';
import { loggerMiddleware, errorHandler } from './middleware';
import { ROUTES } from './consts';

export const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(loggerMiddleware);

app.use(ROUTES.API, gameRouter);

/**
 * A request didn't enter the handlers?
 * If the endpoint is not supported - we will return "Can't find url" AppError, otherwise - enter the errorHandler
 *  */

app.all('*', (req: Request, res: Response, next: NextFunction) => {
  return next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandler);
