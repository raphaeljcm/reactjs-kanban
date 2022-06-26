import { useContext, useRef } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import { Container, Label } from './styles.js';

interface CardProps {
  data: {
    id: number;
    content: string;
    labels: string[];
    user?: string;
  }
  index: number;
  listIndex: number;
}

type DragItem = {
  index: number;
  id: string;
  type: string;
  listIndex: number;
}

export function Card({ data, index, listIndex }: CardProps) {
  const ref = useRef<HTMLDivElement>();
  const { move } = useContext(BoardContext);
  
  const [{ isDragging }, dragRef] = useDrag({
    type: 'CARD',
    item: { index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    })
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item: DragItem, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      const draggedIndex = item.index;
      const targetIndex = index;

      // it's the same card
      if(draggedIndex === targetIndex && draggedListIndex === targetListIndex) {
        return;
      }

      if(ref.current !== undefined) {
        const targetSize = ref.current.getBoundingClientRect();
        const targetCenter = (targetSize.bottom - targetSize.top) / 2;

        const draggedOffset = monitor.getClientOffset()!;
        const draggedTop = draggedOffset.y - targetSize.top;
        
        // if it's before the target top, I won't do anything
        if(draggedIndex < targetIndex && draggedTop < targetCenter) {
          return;
        }

        // if it's after the target bottom, I also won't do anything
        if(draggedIndex > targetIndex && draggedTop > targetCenter) {
          return;
        }

        move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

        item.index = targetIndex;
        item.listIndex = targetListIndex;
      }
    }
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>

      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="User photo" />}
    </Container>
  );
}