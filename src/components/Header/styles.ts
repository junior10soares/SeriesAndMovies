import { styled } from 'styled-components'

export const Container = styled.header`
  display: flex;
  max-width: 100%;
  height: 80px;
  background: ${(props) => props.theme.blue};
  justify-content: space-between;
  padding: 20px;

  div {
    display: flex;
    gap: 30px;
  }
  button {
    background: transparent;
    cursor: pointer;
    color: ${(props) => props.theme.white};
    font-weight: bold;
    border: none;
  }
  button:last-child {
    background: black;
    padding: 10px;
    color: ${(props) => props.theme.white};
    font-weight: bold;
    border-radius: 8px;
  }
`
