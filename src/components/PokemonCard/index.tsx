import { Fragment } from 'react'
import Pokemon from '../../interfaces/pokemon'
import { Card } from './styles'

export const PokemonCard: React.FC<Pokemon> = correctPokemon => {
  return (
    <Fragment>
      <Card>
        <img src={correctPokemon?.imageUrl} width={200} height={200} />
        <p>Who is that Pokémon?</p>
      </Card>
    </Fragment>
  )
}
