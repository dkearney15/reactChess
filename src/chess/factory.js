import Game from './game/game.js';
import Board from './board/board.js';

const makeGame = (player1, player2) => {
	return new Game(new Board(), player1, player2);
}

export default { makeGame };