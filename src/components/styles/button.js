import styled, {css} from 'styled-components';

export const Button = styled.button`
  padding: 0.5rem;
  color: ${props => props.textColor || 'white'};
  border: none;
  outline: none;
  background-color:  ${props => props.color || 'transparent'};
  :disabled {
    background-color: rgb(233, 233, 233);
    :hover {
      cursor: auto;
    }
  }
  :hover {
    cursor: pointer;
  }
  ${props => props.round && css`
    
    display: flex;
    align-items: center;
    border: 1px solid gray;
    border-radius: 50%;
    margin: 0 5px;
  `}
`;


