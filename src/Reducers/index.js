import { combineReducers } from 'redux';

import turns from './turnsReducer';
import players from './playerReducer';
import board from './boardReducer';

export default combineReducers({
    turns,
    players,
    board
});