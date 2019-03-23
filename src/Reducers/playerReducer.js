import { cloneDeep } from 'lodash';

export default (state={
    white: null,
    black: null
}, action) => {
    switch (action.type) {
        case "SET_PLAYER": {
            const newState = cloneDeep(state);
            const newPlayer = cloneDeep(action.payload.player);
            newState[action.payload.playerColor] = newPlayer;
            return newState;
        }
        case "MOVE": {            
            const { startSpace, endSpace } = cloneDeep(action.payload);
            const newState = cloneDeep(state);
            const takingTurnPlayer = newState[startSpace.color];
            takingTurnPlayer.turnsTaken.push({startSpace, endSpace});
            if (endSpace.color) takingTurnPlayer.piecesTaken.push(endSpace);
            return newState;
        }
        default: {
            return state;
        }
    }
}