import { useEffect, useState } from 'react'
import { Aside } from '../../components/Aside'
import { Header } from '../../components/Header'
import { Container } from './styles'
import { api } from '../../lib/axios'
import { useParams } from 'react-router-dom'

interface MovieOrSeries {
  images: {
    'Poster Art': {
      url: string
      width: number
      height: number
    }
  }
  title: string
  programType: string
}

export function MoviesOrSeries() {
  const [showType, setShowType] = useState<MovieOrSeries[]>([])
  const [loading, setLoading] = useState(true)
  const { type } = useParams()

  useEffect(() => {
    async function fetchMoviesOrSeries() {
      try {
        const response = await api.get('/sample.json')
        const filteredType = response.data.entries.filter(
          (item: MovieOrSeries) => item.programType === type,
        )
        setShowType(filteredType)
        setLoading(false)
      } catch (error) {
        console.log(error)
        setLoading(false)
      }
    }
    fetchMoviesOrSeries()
  }, [type])

  return (
    <div>
      <Header />
      <Aside />
      <Container>
        {loading ? (
          <p>Loading...</p>
        ) : (
          showType.map((item) => (
            <span key={item.title}>
              <img src={item.images['Poster Art']?.url} alt={item.title} />
              <h6>{item.title}</h6>
            </span>
          ))
        )}
      </Container>
    </div>
  )
}
