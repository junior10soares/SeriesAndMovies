import { Container } from './styles'
import { useParams } from 'react-router-dom'

export function Aside() {
  const { type } = useParams()
  const textToShow = type
    ? type.charAt(0).toUpperCase() + type.slice(1)
    : 'Titles'

  return <Container>Popular {textToShow}</Container>
}
