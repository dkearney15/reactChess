import Board from '../chess/board/board.js';

import { cloneDeep } from 'lodash';
import Piece from '../chess/piece/piece.js';

const newBoard = new Board();
newBoard.populatePieces();

export default (state=newBoard, action) => {
    switch (action.type) {
        case 'MOVE':
            // state.logBoard();
            const { startSpace, endSpace } = cloneDeep(action.payload);
            const startCoords = startSpace.value;
            const endCoords = endSpace.value;
            startSpace.value = endCoords;
            const newGrid = cloneDeep(state.grid);
            //make the move
            newGrid[startCoords[0]][startCoords[1]] = new Piece(null, null, startCoords);
            newGrid[endCoords[0]][endCoords[1]] = startSpace;
            const newBoard = new Board(newGrid);
            // newBoard.logBoard();
            return newBoard;
        default: 
            return state;
    }
}