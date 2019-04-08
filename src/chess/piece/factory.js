import Piece from './piece.js';
import Rook from './sliding/sliding-pieces/rook.js';
import Bishop from './sliding/sliding-pieces/bishop.js';
import Queen from './sliding/sliding-pieces/queen.js';
import King from './non-sliding/king.js';
import Knight from './non-sliding/knight.js';
import Pawn from './non-sliding/pawn.js';

export default {
	getPiece: (html, color, value, name) => { return new Piece(html, color, value, name) }, 
	getRook: (html, color, value, name) => { return new Rook(html, color, value, name) },
	getBishop: (html, color, value, name) => { return new Bishop(html, color, value, name) },
	getPawn: (html, color, value, name) => { return new Pawn(html, color, value, name) },
	getKnight: (html, color, value, name) => { return new Knight(html, color, value, name) },
	getQueen: (html, color, value, name) => { return new Queen(html, color, value, name) },
	getKing: (html, color, value, name) => { return new King(html, color, value, name) },
}