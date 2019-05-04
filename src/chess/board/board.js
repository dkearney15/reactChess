import PieceFactory from '../piece/factory.js';

import { intoCheck } from '../../Utils/chess.js';

export default class Board {

	constructor(grid) {
		this.grid = grid || function(){
			let arr = []
			for (let i = 0; i < 8; i++) {
				arr[i] = []
				for (let j = 0; j < 8; j++) {
					let x = PieceFactory.getPiece(null,null,[i,j])
					arr[i].push( x )
				}
			}
			return arr
		}()
	}

	populatePieces() {
		this.grid[0][0] = PieceFactory.getRook("\u2656", 'white', [0,0], 'Rook');
		this.grid[0][7] = PieceFactory.getRook("\u2656", 'white', [0,7], 'Rook');
		this.grid[7][0] = PieceFactory.getRook("\u265C", 'black', [7,0], 'Rook');
		this.grid[7][7] = PieceFactory.getRook("\u265C", 'black', [7,7], 'Rook');
	
		this.grid[0][2] = PieceFactory.getBishop("\u2657", 'white', [0,2], 'Bishop');
    	this.grid[7][2] = PieceFactory.getBishop("\u265D", 'black', [7,2], 'Bishop');
    	this.grid[0][5] = PieceFactory.getBishop("\u2657", 'white', [0,5], 'Bishop');
    	this.grid[7][5] = PieceFactory.getBishop("\u265D", 'black', [7,5], 'Bishop');
		
		this.grid[0][1] = PieceFactory.getKnight("\u2658", 'white', [0,1], 'Knight');
    	this.grid[0][6] = PieceFactory.getKnight("\u2658", 'white', [0,6], 'Knight');
    	this.grid[7][1] = PieceFactory.getKnight("\u265E", 'black', [7,1], 'Knight');
    	this.grid[7][6] = PieceFactory.getKnight("\u265E", 'black', [7,6], 'Knight');

		this.grid[0][4] = PieceFactory.getKing("\u2654", 'white', [0,4], 'King');
    	this.grid[0][3] = PieceFactory.getQueen("\u2655", 'white', [0,3], 'Queen');
    	this.grid[7][4] = PieceFactory.getKing("\u265A", 'black', [7,4], 'King');
    	this.grid[7][3] = PieceFactory.getQueen("\u265B", 'black', [7,3], 'Queen');

    	for(let i = 0; i < 8; i++){
			this.grid[1][i] = PieceFactory.getPawn("\u2659", 'white', [1,i], 'Pawn');
			this.grid[6][i] = PieceFactory.getPawn("\u265F", 'black', [6,i], 'Pawn');
		}
	}

	inBounds(pos) {
		return pos[0] < 8 && pos[0] >= 0 && pos[1] < 8 && pos[1];
	}

	logBoard() {
		this.grid.forEach((row, i) => {
		  let rowString = '';
		  let style = [];
		  row.forEach((space, j) => {
		    const firstLetter = space.name ? '%c' + space.name.slice(0,1) : '%c ';
		    const backCol = (i + j) % 2 === 0 ? 'blue' : 'yellow';
		    style.push(`color: ${space.color};background:${backCol};font-size:36px;text-transform:uppercase;`);
		    rowString += firstLetter;
		  });
		  console.log(
		  	rowString, 
		  	style[0], 
		  	style[1],
		  	style[2], 
		  	style[3], 
		  	style[4], 
		  	style[5],
		  	style[6],
		  	style[7]
		  );
		});
	}

	validMoves(color) {
		const grid = this.grid;
		const board = this;
		return grid.reduce((moves, row) => {
			row.forEach(space => {
				const spaceMoves = space.color === color && space.moves && space.moves(grid).reduce((accum, move) => {
					return !intoCheck(board, space, grid[move[0]][move[1]]) ?
						[...accum, move.join(',')] :
						accum;
				}, []);
				moves[`${space.value.join(',')}`] = spaceMoves || [];
			});
			return moves;
		}, {});		
	}

	inCheck() {
		const grid = this.grid;
		return grid.reduce((status, row) => {
			return row.reduce((status, space) => {
				return space.moves && space.moves(grid).reduce((status, move) => {
					return grid[move[0]][move[1]].name === 'King' ? grid[move[0]][move[1]].color : status;
				}, '') || status;
			}, '') || status;
		}, '');
	}

	move(startSpace, endSpace) {
		const startCoords = startSpace.value;
		const endCoords = endSpace.value;
		startSpace.value = endCoords;
		this.grid[startCoords[0]][startCoords[1]] = PieceFactory.getPiece(null, null, startCoords);
		this.grid[endCoords[0]][endCoords[1]] = startSpace;
	}
}
