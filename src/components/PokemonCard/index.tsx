import { Fragment } from 'react'
import Pokemon from '../../interfaces/pokemon'
import { Card } from './styles'

export const PokemonCard: React.FC<Pokemon> = selectedPokemon => {
  return (
    <Fragment>
      <Card>
        <img src={selectedPokemon?.imageUrl} width={150} height={150} />
        <p>Who is this Pokémon?</p>
        <input type="text" />
        <button>Try</button>
      </Card>
    </Fragment>
  )
}
