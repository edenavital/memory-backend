export class Game {
  constructor(
    private nickname: string,
    private timestamp: number,
    private actions: number,
    private date_timestamp: number
  ) {
    this.nickname = nickname;
    this.timestamp = timestamp;
    this.actions = actions;
    this.date_timestamp = date_timestamp;
  }

  public printGameMessage = () => {
    return `${this.nickname} won!, took him ${
      this.timestamp * 1000
    } seconds to complete!`;
  };
}
