import React, { Component } from 'react';
import { connect } from 'react-redux';
import { shuffle } from 'lodash';

import StyledBoard from '../StyledComponents/board.js';
import Row from '../StyledComponents/row.js';
import Space from '../StyledComponents/space.js';

import { move } from '../Actions/boardActions.js';
import { incrementTurnCount } from '../Actions/turnActions.js';

function mapStateToProps(state) {
    return {
        rows: state.board.grid,
        turnTakingColor: state.turns % 2 === 0 ? 'white' : 'black'
    };
}

function mapDispatchToProps(dispatch) {
    return { }
}


class Board extends Component {
    constructor (props) {
        super();
        this.state = {
            startPiece: null,
        }
    }

    startMove = space => {
        if (space.color === this.props.turnTakingColor) this.setState({startPiece: space});        
    }

    finishMove = space => {
        // validate here
        if (true) {
            this.props.dispatch(move(this.state.startPiece, space));
            this.props.dispatch(incrementTurnCount());
            this.setState({startPiece: null});
        }
    }

    generateKey = pre => {
        return shuffle(`${pre}_ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_${ new Date().getTime() }`.split('')).join('').slice(0,20);
    }
    
    render() {
        const startPiece = this.state.startPiece;
        const rows = this.props.rows;
        return (
            <StyledBoard>
                {
                    rows.map((row, rowIdx) => {
                        return (
                            <Row key={this.generateKey(row[0].HTML)}>
                                {
                                    row.map((space, spaceIdx) => {
                                        const color = (spaceIdx + rowIdx) % 2 === 0 ? 'black' : 'white';
                                        return <Space
                                            key={this.generateKey(space.HTML)}
                                            onClick={() => startPiece ? this.finishMove(space) : this.startMove(space)}
                                            eligiblePiece={startPiece || space.color === this.props.turnTakingColor} 
                                            startPiece={startPiece === space}
                                            displayColor={color}>
                                            {space.HTML}
                                        </Space>
                                    })
                                }
                            </Row>
                        )
                    })
                }
            </StyledBoard>
        );
    }
}

export default connect(mapStateToProps)(Board);
