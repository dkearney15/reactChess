import React, { Component } from 'react';
import { connect } from 'react-redux';

import Button from '../StyledComponents/utils/button';
import PlayerCreation from './PlayerCreation';

function mapStateToProps(state) {    
    return {
        playerOne: state.players[1],
        playerTwo: state.players[2]
    };
}

function mapDispatchToProps(dispatch) {
    // return { actions: (actionCreators, dispatch) };
    return {}
}


class StartSequence extends Component {
    constructor (props) {
        super();

    }

    setBoard() {

    }

    render() {
        const { playerOne, playerTwo } = this.props;
        return (
            <div>
                { !playerOne ? <PlayerCreation player={1}/> : null }
                { !playerTwo ? <PlayerCreation player={2}/> : null }
                <Button textColor="#7e7f82" backColor="black" disabled={!(playerOne && playerTwo)}>Start Game</Button>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(StartSequence);
