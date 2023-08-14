import { Header } from '../../components/Header'
import { FilmSlate } from '@phosphor-icons/react'
import { Container } from '../../pages/Home/styles'
import { Aside } from '../../components/Aside'
import { NavLink } from 'react-router-dom'

export function Home() {
  return (
    <div>
      <Header />
      <Aside />
      <Container>
        <div>
          <NavLink to="/series" style={{ textDecoration: 'none' }}>
            <button>
              SERIES
              <FilmSlate size={40} />
            </button>
          </NavLink>
          <p>Popular Series</p>
        </div>
        <div>
          <NavLink to="/movie" style={{ textDecoration: 'none' }}>
            <button>
              MOVIES
              <FilmSlate size={40} />
            </button>
          </NavLink>
          <p>Popular Movies</p>
        </div>
      </Container>
    </div>
  )
}
