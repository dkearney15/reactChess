import Piece from '../piece.js';

export default class Knight extends Piece {
	moves(grid) {
		const knight = this;
		const moves = [];
		const options = [[1,-2],[2,-1],[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2]];
		options.forEach(move => {
			const newMove = [move[0] + this.value[0], move[1] + this.value[1]];
			if (this.inBounds(newMove) && grid[newMove[0]][newMove[1]].color !== knight.color) {
				moves.push(newMove);
			}
		})
		return moves;
	}
}