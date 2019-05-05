import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shuffle } from 'lodash';

import Board from './Board.js';
import PlayerDisplay from './PlayerDisplay.js';

import GameWrap from '../StyledComponents/gameWrap.js';

function mapStateToProps(state) {
    const turnTakingColor = state.turns % 2 === 0 ? 'white' : 'black';
    return {
        turnTakingColor,
        players: state.players,
        turns: state.turns
    };
}

class Game extends Component {
    constructor (props) {
        super();
        this.state = {

        }
    }
    generateKey = pre => {
        return shuffle(`${pre}_ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_${ new Date().getTime() }`.split('')).join('').slice(0,20);
    }
    
    render() {
        return (
            <GameWrap>
                {this.props.players.white &&  this.props.players.black ? <PlayerDisplay color="white" /> : <div></div>}
                <Board />
                {this.props.players.white &&  this.props.players.black ? <PlayerDisplay color="black" /> : <div></div>}
            </GameWrap>
        );
    }
}

export default connect(mapStateToProps)(Game);
