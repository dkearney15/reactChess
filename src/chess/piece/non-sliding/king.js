import Piece from '../piece.js';

export default class King extends Piece {
	moves(grid) {
		const king = this;
		const moves = [];
		const options = [[0,1],[0,-1],[1,0],[1,1],[1,-1],[-1,0],[-1,-1],[-1,1]];
		options.forEach(move => {
			const newMove = [move[0] + king.value[0], move[1] + king.value[1]];
			if (!this.inBounds([move[0] + king.value[0], move[1] + king.value[1]])) return;
			if (this.inBounds(newMove) && grid[newMove[0]][newMove[1]].color !== king.color) {
				moves.push(newMove);
			}
		});
		return moves;
	}
}