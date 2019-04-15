import { cloneDeep } from 'lodash';
import Board from '../chess/board/board';

export function intoCheck(board, start, end) {
    const newBoard = new Board(cloneDeep(board.grid));
    const newStart = cloneDeep(start);
    const newEnd = cloneDeep(end);
    newBoard.move(newStart, newEnd);
    return newBoard.inCheck() === start.color;
}