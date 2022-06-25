import styled from 'styled-components'

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #292929;
  margin-top: 3rem;
  padding: 1rem;
  border-radius: 5%;
  font-size: 1rem;
  font-weight: 500;
  width: 30%;

  div {
  }

  img {
    filter: brightness(0%);
  }

  button {
    background-color: #eb3434;
    border: none;
    color: #ffffff;
    width: 85%;
    height: 3rem;
    margin-top: 1rem;
    cursor: pointer;
    transition: 0.3s;
    font-size: 1rem;

    :hover {
      filter: brightness(85%);
    }
  }
`
