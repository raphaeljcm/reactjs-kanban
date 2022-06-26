import { useDrag } from 'react-dnd';

import { Container, Label } from './styles';

interface CardProps {
  data: {
    content: string;
    labels: string[];
    user?: string;
  }
}

export function Card({ data }: CardProps) {
  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });

  return (
    <Container ref={dragRef} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>

      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="User photo" />}
    </Container>
  );
}