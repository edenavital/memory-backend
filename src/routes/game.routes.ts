import { Router } from 'express';
import gameController from '../controllers/game.controller';
const router = Router();

router.get('/getGames', gameController.getGames);
router.post('/createGame', gameController.createGame);
export default router;
