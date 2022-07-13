import { Fragment } from 'react'
import Pokemon from '../../interfaces/pokemon'
import { Card } from './styles'

type Props = {
  correctPokemon: Pokemon
  answerState: boolean | null
}

export const PokemonCard: React.FC<Props> = ({
  correctPokemon,
  answerState
}) => {
  return (
    <Fragment>
      <Card showPokemon={answerState !== null ? 100 : 0}>
        <img src={correctPokemon?.imageUrl} width={200} height={200} />
        <p>Who is that Pokémon?</p>
      </Card>
    </Fragment>
  )
}
