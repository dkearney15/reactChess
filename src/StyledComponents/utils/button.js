import styled from 'styled-components';

export default styled.button`
    padding: 5px;    
    background-color: ${props => props.disabled ? '#cccccc' : props.backColor};
    color: ${props => props.disabled ? '#666666' : props.textColor};
    &:hover {
        color: ${props => props.disabled ? '#666666' : (props.hovTextColor || props.backColor)};
        background-color: ${props => props.disabled ? '#cccccc' : (props.hovBackColor || props.textColor)};
        cursor: pointer;
    }
`