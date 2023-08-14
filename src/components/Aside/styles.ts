import { styled } from 'styled-components'

export const Container = styled.h1`
  max-width: 100%;
  height: 60px;
  padding: 20px;
  background: ${(props) => props.theme.black};
  color: ${(props) => props.theme.white};
  font-size: 17px;
`
