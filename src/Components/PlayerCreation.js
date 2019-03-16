import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setPlayer } from '../Actions/playerActions';

import Player from '../chess/player/player.js';

class PlayerCreation extends Component {
    constructor (props) {
        super();
        this.state = {
            ...props
        }
    }

    changeName = event => {
        this.setState({name: event.target.value});
    }
    
    createPlayer = event => {
        const color = this.props.player === 1 ? 'white' : 'black';
        const newPlayer = new Player(color, this.state.name);        
        this.props.dispatch(setPlayer(this.props.player, newPlayer));
        event.preventDefault(); 
    }
    
    render() {
        return (
            <form onSubmit={this.createPlayer}>
                <label>
                    Player {this.props.player} Name:
                    <input type="text" value={this.props.value} onChange={this.changeName} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default connect()(PlayerCreation);