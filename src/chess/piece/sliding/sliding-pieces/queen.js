import Sliding from '../sliding.js';

import { flatten } from 'lodash';

export default class Queen extends Sliding {
	moves(grid) {
		const moveDirections = [[1,0],[-1,0],[0,1],[0,-1],[1,1],[-1,-1],[-1,1],[1,-1]];
		const moves = moveDirections.map(dir => {
			const x = dir[0];
			const y = dir[1];
			return this.direction(x, y, grid, this.value);
		});
		return flatten(moves);
	}
}