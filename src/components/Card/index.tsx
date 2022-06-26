import { Container, Label } from './styles';

interface CardProps {
  data: {
    content: string;
    labels: string[];
    user?: string;
  }
}

export function Card({ data }: CardProps) {
  return (
    <Container>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>

      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="User photo" />}
    </Container>
  );
}