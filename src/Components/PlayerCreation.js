import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setPlayer } from '../Actions/playerActions';

import Player from '../chess/player/player.js';

import PlayerCreationStyle from '../StyledComponents/playerCreation.js';

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

    changeType = event => {
        this.setState({type: event.target.value});
    }
    
    createPlayer = event => {
        const color = this.props.player;
        const newPlayer = new Player(color, this.state.name, this.state.type); 
        this.props.dispatch(setPlayer(color, newPlayer));
        event.preventDefault(); 
    }
    
    render() {
        return (
            <PlayerCreationStyle onSubmit={this.createPlayer}>
                <div>{this.props.player}</div>
                <div>
                    <label>
                        Name:
                        <input type="text" value={this.props.value} onChange={this.changeName} />
                    </label>        
                    <select onChange={this.changeType}>
                        <option value="human">Human</option>
                        <option value="computer">Computer</option>
                    </select>
                    <input type="submit" value="Submit" />
                </div>
            </PlayerCreationStyle>
        );
    }
}

export default connect()(PlayerCreation);