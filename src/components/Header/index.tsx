import pokeballIcon from '../../assets/pokeball.png'
import { Container, Image } from '../Header/styles'

export const Header: React.FC = () => {
  return (
    <Container>
      <Image src={pokeballIcon} alt="Pokeball" />
      <h1>
        Poke<strong>next</strong>
      </h1>
    </Container>
  )
}
