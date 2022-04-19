import { Fragment, useCallback, useEffect, useState } from 'react'
import { Header } from '../components/Header'
import Pokemon from '../interfaces/pokemon'
import Axios from '../services/axios'

const defaultObject: Pokemon = {
  name: '',
  id: 0,
  imageUrl: '',
  type: []
}

const Home: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon>(defaultObject)

  const getPokemon = useCallback(async (search: string | number) => {
    if (search === 0) {
      return
    }
    try {
      const pokemonSearch: string | number =
        typeof search === 'string' ? search.toLocaleLowerCase() : search
      const { data } = await Axios.get<any>(`pokemon/${pokemonSearch}`)

      setPokemon({
        name: data.name,
        id: data.id,
        imageUrl: data.sprites.front_default,
        type: data.types
      })
    } catch {
      alert('Pokemon not found.')
    }
  }, [])

  useEffect(() => {
    getPokemon(1)
  }, [])

  return (
    <Fragment>
      <Header />
      <main>
        <h1>
          {pokemon?.imageUrl && (
            <>
              <img src={pokemon?.imageUrl} width={150} height={150} />
            </>
          )}
          {pokemon?.name} {pokemon?.id} {pokemon?.type.map(t => t.type.name)}
        </h1>
      </main>
    </Fragment>
  )
}

export default Home
