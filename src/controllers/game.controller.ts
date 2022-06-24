import { Request, Response } from 'express';
import { expressAsyncWrapper } from '../middleware';
import { AppError } from '../utils/AppError/AppError';
import gameService from '../services/game.service';
import { successResponse } from '../utils';
import { IGame } from '../models/Game/Game.types';
import { Game } from '../models/Game';
// import {StatusCode} from 'http-status-codes';

const gameController = {
  getGames: expressAsyncWrapper(async (req: Request, res: Response) => {
    const games = await gameService.getGames();
    return successResponse({ data: games }, res);
  }),
  createGame: expressAsyncWrapper(async (req: Request<{}, {}, {}, IGame>, res: Response) => {
    await gameService.createGame(req.query);
    return successResponse({ data: 'successfully created game' }, res);
  }),
};

export default gameController;
