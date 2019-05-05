import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shuffle } from 'lodash';

import Space from '../StyledComponents/space.js';

function mapStateToProps(state) {
    const turnTakingColor = state.turns % 2 === 0 ? 'white' : 'black';
    return {
        turnTakingColor,
        players: state.players,
        turns: state.turns
    };
}

class PlayerDisplay extends Component {
    constructor (props) {
        super();
        this.state = {

        }
    }
    generateKey = pre => {
        return shuffle(`${pre}_ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_${ new Date().getTime() }`.split('')).join('').slice(0,20);
    }
    
    render() {
        const { color, name, inCheck, piecesTaken, type } = this.props.players[this.props.color] || {};
        return (
            <section>
                <h3>{color}</h3>
                <h2>{name}</h2>
                <div>
                    <div>Pieces Taken:</div>
                    <div>
                        {
                            (piecesTaken || []).map(piece => {
                                return <Space 
                                    displayColor={piece.color}
                                    playDisplay={true}
                                    key={this.generateKey(piece.HTML)}>{piece.HTML}</Space>
                            })
                        }
                    </div>
                </div>
            </section>
        );
    }
}

export default connect(mapStateToProps)(PlayerDisplay);