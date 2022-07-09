import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #292929;
  margin-top: 3rem;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 500;
  width: 30%;

  @media (max-width: 720px) {
    width: 100%;
  }

  img {
    filter: brightness(0%);
  }
`
