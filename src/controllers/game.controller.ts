import { Request, Response, NextFunction } from 'express';
// import {StatusCode} from 'http-status-codes';

const gameController = {
  getGames: (req: Request, res: Response, next: NextFunction) => {
    try {
      console.log('BLA!');
      res.status(200).json({ message: 'BLA' });
    } catch (err) {
      next(err);
    }
  },
};

export default gameController;
