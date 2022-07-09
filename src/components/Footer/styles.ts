import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: auto;
  padding: 1rem;
  font-size: 1rem;
  font-weight: 400;

  a {
    text-decoration: none;
    color: #e1e1e6;
    transition: 0.3s;

    :hover {
      filter: brightness(80%);
      cursor: pointer;
    }
  }
`
