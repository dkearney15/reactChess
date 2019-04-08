import Board from '../chess/board/board.js';
import { cloneDeep } from 'lodash';

const newBoard = new Board();
newBoard.populatePieces();

export default (state=newBoard, action) => {
    switch (action.type) {
        case 'MOVE':
            const { startSpace, endSpace } = cloneDeep(action.payload);
            const newGrid = cloneDeep(state.grid);
            const newBoard = new Board(newGrid);
            newBoard.move(startSpace, endSpace);
            return newBoard;
        default: 
            return state;
    }
}