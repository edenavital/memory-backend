import mongoose, { Document, Schema } from 'mongoose';
import { IGame } from './Game.types';

export interface MongooseIGame extends IGame, Document {}

const GameSchema = new Schema<MongooseIGame>(
  {
    gameDuration: { type: Number, required: true },
    nickname: { type: String, required: true },
    actions: { type: Number, required: true },
  },
  { timestamps: true },
);

export default mongoose.model<MongooseIGame>('Game', GameSchema);
