import { Fragment } from 'react'
import Pokemon from '../../interfaces/pokemon'
import { Card } from './styles'

export const PokemonCard: React.FC<Pokemon> = selectedPokemon => {
  return (
    <Fragment>
      <Card>
        <div />
        <img src={selectedPokemon?.imageUrl} width={150} height={150} />
        <p>Who is this Pokémon?</p>
        <button>Option One</button>
        <button>Option Two</button>
        <button>Option Three</button>
      </Card>
    </Fragment>
  )
}
