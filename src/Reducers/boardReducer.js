import Board from '../chess/board/board.js';

import { cloneDeep } from 'lodash';
import Piece from '../chess/piece/piece.js';

const newBoard = new Board();
newBoard.populatePieces();

export default (state=newBoard, action) => {
    switch (action.type) {
        case 'MOVE':
            const { startSpace, endSpace } = action.payload;
            const startCoords = startSpace.value;
            const startPiece = cloneDeep(startSpace);
            const endCoords = endSpace.value;
            const newGrid = cloneDeep(state.grid);
            //make the move
            newGrid[startCoords[0]][startCoords[1]] = new Piece(null, null, startCoords);
            newGrid[endCoords[0]][endCoords[1]] = startPiece;
            return new Board(newGrid);
        default: 
            return state;
    }
}