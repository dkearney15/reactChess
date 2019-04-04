import Sliding from '../sliding.js';

import { flatten } from 'lodash';

export default class Bishop extends Sliding {
	moves(board) {
		const moveDirections = [[1,1],[-1,-1],[-1,1],[1,-1]];
		const moves = moveDirections.map(dir => {
			const x = dir[0];
			const y = dir[1];
			return this.direction(x, y, board, this.value);
		});
		return flatten(moves);
	}
}