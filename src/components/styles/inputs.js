import styled, {css} from 'styled-components';

export const Input = styled.input`
  font-size: inherit;
  border: 1px solid white;
  height: 2rem;
  padding: 0.5rem;
  width: 100%;
  &:focus {
    border: 1px solid gray;
    outline: gray;
  }
  ${props => props.main && css`
    width: 60%;
  `}
`;


