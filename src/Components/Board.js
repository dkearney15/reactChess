import React, { Component } from 'react';
import { connect } from 'react-redux';

import StyledBoard from '../StyledComponents/board.js';
import Row from '../StyledComponents/row.js';
import Space from '../StyledComponents/space.js';

import { move } from '../Actions/boardActions.js';

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
            ...props,
            startPiece: null,
        }
    }

    startMove = space => {
        console.log('start: ', space);
        if (space.color === this.props.turnTakingColor) this.setState({startPiece: space});        
    }

    finishMove = space => {
        console.log('proposed move: ', space);
        // get validMoves, IF move is valid dispatch action ELSE setState startPiece to null
        if (true) this.setState({startPiece: null}, () => {
            this.props.dispatch(move(this.state.startPiece, space));
        });
    }
    
    render() {
        const { rows, startPiece } = this.state;
        return (
            <StyledBoard>
                {
                    rows.map((row, rowIdx) => {
                        return (
                            <Row>
                                {
                                    row.map((space, spaceIdx) => {
                                        const color = (spaceIdx + rowIdx) % 2 === 0 ? 'black' : 'white';
                                        return <Space
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
