import Piece from '../piece.js';

export default class Sliding extends Piece {
	direction(x, y, grid) {
		const oppcol = this.color === 'white' ? 'black' : 'white';
		const moves = [];
		let i = this.value[0] + x;
		let j = this.value[1] + y;
		if (i > 7 || i < 0 || j > 7 || j < 0) return [];
		//^^if the piece is against the edge of the board, there are no moves, so we return []
		while (i < 8 && j < 8 && i > -1 && j > -1) {
			if (grid[i][j].name !== 'empty') break;
			moves.push([i,j]); 
			i += x;
			j += y;
		}
		//below we check if the last piece we checked up here^^
		//is an opponent's piece and is on the board
		if (i < 8 && j < 8 && i > -1 && j > -1 && grid[i][j].color === oppcol) {
			moves.push([i,j]);
		 	return moves;
		}
		return moves;
	} 
}