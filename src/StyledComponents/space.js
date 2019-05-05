import styled from 'styled-components';

export default styled.div`
    background-color: ${props => {
        if (props.startPiece) {
            return '#b7cec9';
        } else if (props.playDisplay) {
            return 'transparent'
        } else {
            return props.displayColor === 'white' ? '#cccdce' : '#7e7f82';
        }
    }};
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    font-size: 2em;    
    &:hover {
        cursor: ${props => props.eligiblePiece ? 'pointer' : 'auto'};
        background-color: ${props => props.eligiblePiece ? '#b7cec9' : 'auto'};
    }
`