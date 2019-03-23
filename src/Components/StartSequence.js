import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../StyledComponents/utils/button';
import PlayerCreation from './PlayerCreation';

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
        return (
            <div>
                { !whitePlayer ? <PlayerCreation player="white"/> : null }
                { !blackPlayer ? <PlayerCreation player="black"/> : null }
                <Button textColor="#7e7f82" backColor="black" disabled={!(whitePlayer && blackPlayer)}>Start Game</Button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartSequence);
