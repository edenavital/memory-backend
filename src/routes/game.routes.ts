import { Router } from 'express';
import gameController from '../controllers/game.controller';
import { GetSingleGameParams } from '../models/game';
import { GAME_ROUTES } from '../consts';
const router = Router();

router.get(GAME_ROUTES.GET_GAMES, gameController.getGames);

router.get<GetSingleGameParams>(`${GAME_ROUTES.GET_GAME}/:gameId`, gameController.getGame);

router.post(GAME_ROUTES.CREATE_GAME, gameController.createGame);

export default router;
