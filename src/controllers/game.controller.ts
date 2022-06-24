import { Request, Response, NextFunction } from 'express';
import { expressAsyncWrapper } from '../middleware';
import { AppError } from '../utils/AppError/AppError';
// import {StatusCode} from 'http-status-codes';

const gameController = {
  getGames: expressAsyncWrapper((req: Request, res: Response, next: NextFunction) => {
    // res.status(200).json({ message: 'BLA' });
    throw new AppError('blaaa', 500);
  }),
};

export default gameController;
