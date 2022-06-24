import { Router } from 'express';
import gameController from '../controllers/game.controller';
import { GetSingleGameParams } from '../models/game';

const router = Router();

router.get('/getGames', gameController.getGames);
router.get<GetSingleGameParams>('/getGame/:gameId', gameController.getGame);
router.post('/createGame', gameController.createGame);

export default router;
