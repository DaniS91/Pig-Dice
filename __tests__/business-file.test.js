import Game from './../src/business-file.js';

describe('Game', () => {

  test('should correctly create Game object with a player property', () => {
    const testGame = new Game(["player1", "player2"]);
    expect(testGame.players).toEqual(["player1", "player2"]);
  });
});