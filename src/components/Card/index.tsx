import { Container, Label } from './styles';

export function Card() {
  return (
    <Container>
      <header>
        <Label color='#7159c1' />
      </header>

      <p>Fazer a migração completa do servidor</p>
      <img src="https://github.com/raphaeljcm.png" alt="my photo" />
    </Container>
  );
}