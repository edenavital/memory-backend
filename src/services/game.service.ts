import { Game, IGame, MongooseIGame } from '../models/Game';
import GameModel from '../models/Game/game.model';
import { DocumentDefinition } from 'mongoose';

const gameService = {
  getGames: async () => {
    const games = await GameModel.find();
    return games;
  },
  createGame: async (query: DocumentDefinition<MongooseIGame>) => {
    const { gameDuration, nickname, actions } = query;
    const newGame = new Game(nickname, gameDuration, actions);
    await GameModel.create(newGame);
  },
};

export default gameService;
