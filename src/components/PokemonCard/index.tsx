import { Fragment } from 'react'
import Pokemon from '../../interfaces/pokemon'
import { Card } from './styles'

export const PokemonCard: React.FC<Pokemon> = selectedPokemon => {
  console.log(selectedPokemon)
  return (
    <Fragment>
      <Card>
        <img src={selectedPokemon?.imageUrl} width={150} height={150} />
        {`${selectedPokemon?.name.toUpperCase()} #${selectedPokemon?.id}`}
      </Card>
    </Fragment>
  )
}
