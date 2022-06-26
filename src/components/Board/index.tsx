import { List } from '../List';

import { Container } from './styles';

export function Board() {
  return (
    <Container>
      <List />
      <List />
      <List />
      <List />
    </Container>
  );
}