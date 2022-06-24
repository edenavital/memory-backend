import { IGame } from './Game.types';

export class Game implements IGame {
  constructor(public nickname: string, public gameDuration: number, public actions: number) {
    this.nickname = nickname;
    this.gameDuration = gameDuration;
    this.actions = actions;
  }

  public printGameMessage = () => {
    return `${this.nickname} won!, took him ${this.gameDuration * 1000} seconds to complete!`;
  };
}
