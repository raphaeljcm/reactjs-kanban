import { MdAdd } from 'react-icons/md';
import { Card } from '../Card';

import { Container } from './styles';

interface ListProps {
  data: {
    title: string;
    creatable: boolean;
    done?: boolean;
    cards: {
      id: number;
      content: string;
      labels: string[];
      user?: string;
    }[]
  }
}

export function List({ data }: ListProps) {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type='button'>
            <MdAdd size={24} color='#fff' />
          </button>
        )}
      </header>

      <ul>
        {data.cards.map(card => <Card key={card.id} data={card} />)}
      </ul>
    </Container>
  );
}