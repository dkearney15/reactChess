import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../StyledComponents/utils/button';
import PlayerCreation from './PlayerCreation';

import StartWrap from '../StyledComponents/startWrap.js';

function mapStateToProps(state) {
    return {
        whitePlayer: state.players.white,
        blackPlayer: state.players.black
    };
}

function mapDispatchToProps(dispatch) {
    // return { actions: (actionCreators, dispatch) };
    return {}
}


class StartSequence extends Component {
    render() {
        const { whitePlayer, blackPlayer } = this.props;
        if (whitePlayer && blackPlayer) return <div></div>
        return (
            <StartWrap>
                { !whitePlayer ? <PlayerCreation player="white"/> : null }
                { !blackPlayer ? <PlayerCreation player="black"/> : null }
            </StartWrap>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartSequence);
