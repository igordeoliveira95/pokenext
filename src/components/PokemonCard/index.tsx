import { Fragment } from 'react'
import Pokemon from '../../interfaces/pokemon'
import { Card } from './styles'

export const PokemonCard: React.FC<Pokemon> = correctPokemon => {
  return (
    <Fragment>
      <Card>
        <img src={correctPokemon?.imageUrl} width={150} height={150} />
        <p>Who is this Pokémon?</p>
      </Card>
    </Fragment>
  )
}
