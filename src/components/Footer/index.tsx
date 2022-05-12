import { Container } from './styles'

export const Footer: React.FC = () => {
  return (
    <Container>
      <p>Made by Igor de Oliveira</p>
      <div>
        <a href="https://www.linkedin.com/in/igordeoliveira1/" target="_blank">
          LinkedIn
        </a>{' '}
        |{' '}
        <a href="https://github.com/igordeoliveira95" target="_blank">
          GitHub
        </a>
      </div>
    </Container>
  )
}
