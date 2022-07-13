import styled from 'styled-components'

type StyleProps = {
  showPokemon: number
}

export const Card = styled.div<StyleProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #292929;
  margin-top: 3rem;
  font-size: 1rem;
  font-weight: 500;
  width: 30%;

  img {
    transition: 2s;
    filter: brightness(${props => props.showPokemon}%);
    -webkit-user-drag: none;
    pointer-events: none;
  }

  p {
    margin-bottom: 1rem;
  }

  @media (max-width: 720px) {
    width: 90%;
  }
`
