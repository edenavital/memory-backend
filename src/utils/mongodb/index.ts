import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

export const initMongo = () => {
  const mongoOptions = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    socketTimeoutMS: 30000,
    keepAlive: true,
    autoIndex: false,
    retryWrites: false,
  };

  const MONGO_USERNAME = process.env.MONGO_USERNAME || 'local_username';
  const MONGO_PASSWORD = process.env.MONGO_PASSWORD || 'local_password';
  const MONGO_CLUSTER = process.env.MONGO_CLUSTER || '';

  const URI = `mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.0mwsj.mongodb.net/memoryGame?retryWrites=true&w=majority`;

  mongoose.connect(URI, mongoOptions);

  const db = mongoose.connection;
  db.on('error', (err) => console.error('MONGO ERROR', err));
  db.once('open', () => console.log('Connected successfully'));
};
