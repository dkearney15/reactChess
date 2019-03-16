const inBounds = space => {
	return space[0] > -1 && space[0] < 8 && space[1] > -1 && space[1] < 8;
}

export default class Piece {
	constructor(HTML = null, color = null, value = 0, name = "empty") {
		this.inBounds = inBounds;
		this.HTML = HTML;
		this.color = color;
		this.name = name;
		this.value = value;
	}
}