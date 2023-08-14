import { styled } from 'styled-components'

export const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(180px, 1fr)
  ); /* Colunas autoajustáveis com no mínimo 180px */

  span {
    display: flex;
    flex-direction: column;
    align-items: center; /* Centraliza o conteúdo verticalmente */
    margin-top: 60px;
  }
  img {
    height: 190px;
    width: 150px;
    object-fit: cover; /* Garante que a imagem se ajuste dentro do espaço sem distorções */
  }
  h6 {
    font-size: 15px;
    margin-top: 10px;
  }
`
