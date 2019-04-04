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
}