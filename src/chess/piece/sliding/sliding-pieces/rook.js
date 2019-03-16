import Sliding from '../sliding.js';

import { flatten } from 'lodash';

export default class Rook extends Sliding {
	moves(board, position) {
		const moveDirections = [[1,0],[-1,0],[0,1],[0,-1]];
		const moves = moveDirections.map(dir => {
			const x = dir[0];
			const y = dir[1];
			return this.direction(x, y, board, position);
		});
		return flatten(moves);
	}
}