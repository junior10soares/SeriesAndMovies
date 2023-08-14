import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { MoviesOrSeries } from './pages/MoviesOrSeries'

export function Router() {
  // router que faz as paginas rodarem. tem que colocar o Routes por voltar do route
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:type" element={<MoviesOrSeries />} />
    </Routes>
  )
}
