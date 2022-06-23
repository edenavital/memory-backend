import { Router } from 'express';
import gameController from '../controllers/game.controller';
const router = Router();

router.get('/games', gameController.getGames);

export default router;
