import { styled } from 'styled-components'

export const Container = styled.main`
  display: flex;
  padding: 20px;
  gap: 20px;
  margin-top: 40px;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: 190px;
    width: 150px;
    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme.black};
    border: none;
    cursor: pointer;
    font-size: 20px;
  }
  p {
    font-size: 15px;
    margin-top: 10px;
  }
`
