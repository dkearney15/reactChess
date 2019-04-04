import Piece from '../piece.js';

export default class Pawn extends Piece {
	forwardMoves(grid) {
		const forwardMoves = [];
		if (this.color === 'white') {
			if (this.value[0] + 1 < 8 && grid[this.value[0] + 1][this.value[1]].name === 'empty') {
				forwardMoves.push([this.value[0] + 1,this.value[1]]);
			} 
			if (this.value[0] === 1 && grid[3][this.value[1]].name === 'empty') {
				forwardMoves.push([3,this.value[1]]);
			}
		} else if (this.color === 'black') {
			if (this.value[0] - 1 > -1 && grid[this.value[0] - 1][this.value[1]].name === 'empty') {
				forwardMoves.push([this.value[0] - 1,this.value[1]]);
			} 
			if (this.value[0] === 6 && grid[4][this.value[1]].name === 'empty') {
				forwardMoves.push([4,this.value[1]]);
			}
		}
		return forwardMoves;
	}

	attacks(grid) {
		if(this.value[0] === 0 || this.value[0] === 7) return [];
		const pawn = this;
		let options;
		let oppcol;
		if (pawn.color === 'white') {
			options = [[this.value[0] + 1, this.value[1] + 1], [this.value[0] + 1, this.value[1] - 1]];
			oppcol = 'black';
		} else if (pawn.color === 'black') {
			options = [[this.value[0] - 1, this.value[1] + 1], [this.value[0] - 1, this.value[1] - 1]];
			oppcol = 'white';
		}

		const attacks = [];

		options.forEach(attack => {
			if (attack[1] > 7 || attack[1] < 0) return [];

			if (grid[attack[0]][attack[1]].color === oppcol) {
				attacks.push(attack);
			}
		});
		return attacks;
	}

	moves(grid) {
		return [...this.forwardMoves(grid), ...this.attacks(grid)];
	}
}