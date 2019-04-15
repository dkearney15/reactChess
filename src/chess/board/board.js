import PieceFactory from '../piece/factory.js';

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
		    style.push("color:" + space.color + ";" + "background:" + backCol + ";" + "font-size:36px;text-transform:uppercase;");
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


	// evaluate(turnColor) {
	// 	const board = this; //for sanity and scoping issues
	// 	let blackKingPos;
	// 	let whiteKingPos;
	// 	const whitePieces = [];
	// 	const blackPieces = [];
	// 	let takingTurnPieces;
	// 	let takingTurnKingPos;
	// 	let opposingPieces;
	// 	const validMoves = [];
	// 	// run through the board, bigO is constant right now, exactly 64
	// 	for (let i = 0; i < 8; i++) {
	// 		for (let j = 0; j < 8; j++) {
	// 			// find the kings
	// 			if(board.grid[i][j].value === "\u2654"){
	// 				whiteKingPos = [i,j];
	// 			} else if (board.grid[i][j].value === "\u265A"){
	// 				blackKingPos = [i,j];
	// 			}
	// 			// get the pieces
	// 			if(board.grid[i][j].color === 'white'){
	// 				whitePieces.push(board.grid[i][j]);
	// 			} else if (board.grid[i][j].color === 'black'){
	// 				blackPieces.push(board.grid[i][j]);
	// 			}
	// 		}
	// 	}
		
	// 	if (turnColor === 'white') {
	// 		takingTurnPieces = whitePieces;
	// 		takingTurnKingPos = whiteKingPos;
	// 		opposingPieces = blackPieces;
	// 	} else {
	// 		takingTurnPieces = blackPieces;
	// 		takingTurnKingPos = blackKingPos;
	// 		opposingPieces = whitePieces;
	// 	}

	// 	const boardInCheck = (function(){
	// 		// board is in check if any of the opposing pieces have any moves that kills king
	// 		return opposingPieces.some((opposingPiece) => { // go though opponent's pieces
	// 			const oppPieceMoves = opposingPiece.moves(); // array of moves for opposing piece
	// 			return oppPieceMoves.some((opposingMove)=>{
	// 				return opposingMove.toString() === takingTurnKingPos.toString() ? true : false;
	// 			});
	// 		});
	// 	})();

	// 	// we know if the board is in check or not, which is useful, we have the opponents moves
	// 	// now we make each possible move for the turnTaking side, and then run through the opposing
	// 	// pieces, calculate thier moves and see if they include the takingTurn kingPos, we also, need
	// 	// to check if we captured a piece, since we would then need to not calculate their moves, since
	// 	// they dead

	// 	takingTurnPieces.forEach((piece)=>{
	// 		piece.moves().forEach((choice)=>{
	// 			//in here at most 136 times
	// 			const moveObj = { 
	// 				start: piece.position,
	// 				finish: choice,
	// 				finishPiece: board.grid[choice[0]][choice[1]],
	// 				startPiece: piece,
	// 				finishHtml: board.grid[choice[0]][choice[1]].value,
	// 				startHtml: piece.value,
	// 			};
	// 			safeMove(moveObj.start, moveObj.finish, board);

	// 			const valid = (function(){
	// 				// every opposing piece must have every move not include the king's position
	// 				return opposingPieces.every(oppPiece => {				
	// 					// if piece just got taken, don't go through it's moves
	// 					if(oppPiece.position.toString() !== moveObj.finish.toString()){
	// 						const oppPieceMoves = oppPiece.moves(); // array of moves for opposing piece
	// 						return oppPieceMoves.every(oppPieceMove => {
	// 							// if move equal kingPos board in check
	// 							return oppPieceMove.toString() === takingTurnKingPos.toString() ? false : true;
	// 						});
	// 					} else {
	// 						return true;
	// 					}
	// 				});
	// 			})()

	// 			if (valid){ validMoves.push(moveObj) }
	// 			safeUndoMove(moveObj.start, moveObj.finish, moveObj.finishPiece, moveObj.startPiece, board);
	// 		});
	// 	});

	// 	if (validMoves.length < 1) endGame(turnColor);

	// 	return {
	// 		inCheck: !!boardInCheck,
	// 		validMoves: validMoves,
	// 		whiteKing: whiteKingPos,
	// 		blackKing: blackKingPos,
	// 		whitePieces: whitePieces,
	// 		blackPieces: blackPieces,
	// 	}
	// }

}