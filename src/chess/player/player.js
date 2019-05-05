import { resolve } from "path";
import { reject } from "q";

export default class Player {
	constructor(color, name, type='human'){
		this.color = color;
		this.name = name;
		this.type = type;
		this.inCheck = false;
		this.piecesTaken = [];
		this.turnsTaken = [];
		this.checksForced = 0;
	}

	getMoveFromServer = (board, dummyMove) => {
		if (this.type !== 'computer') return false;
		// make call to server here to get move
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				resolve(dummyMove);
			}, 500);
		}) ;
	}
}