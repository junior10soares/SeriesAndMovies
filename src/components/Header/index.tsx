import { NavLink } from 'react-router-dom'
import { Container } from './styles'

export function Header() {
  return (
    <Container>
      <button>
        <NavLink to="/" style={{ textDecoration: 'none', color: 'white' }}>
          DEMO Streaming
        </NavLink>
      </button>

      <div>
        <button>Login</button>
        <button>Start your free trial</button>
      </div>
    </Container>
  )
}
