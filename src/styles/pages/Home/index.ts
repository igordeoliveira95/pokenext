import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 720px) {
    width: 100%;
  }
`

export const OptionButton = styled.button`
  background-color: #eb3434;
  border: none;
  color: #ffffff;
  width: 30%;
  height: 3rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: 0.3s;
  font-size: 1.1rem;

  :hover {
    filter: brightness(85%);
  }

  @media (max-width: 720px) {
    width: 100%;
  }
`
