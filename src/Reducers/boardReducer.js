import Board from '../chess/board/board.js';

const newBoard = new Board();
newBoard.populatePieces();

export default (state=newBoard, action) => {
    switch (action.type) {
        case 'MOVE':            
            console.log(action);
            console.log(state);
            const newGrid = [];
            state.grid.forEach(row => {
                const newRow = row.map(space => {
                    return ''
                });
            });
            const newState = {grid: [...state.grid]};
            console.log(newState);
            return state;
        default: 
            return state;
    }
}