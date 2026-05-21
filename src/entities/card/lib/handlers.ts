import type { CardProps } from '../model/types';

export function detailsClickHandler(
  event: React.MouseEvent<HTMLButtonElement>,
  title: CardProps['title'],
  description: CardProps['description'],
) {
  console.log(`Подробнее о: ${title}\n${'-'.repeat(25)}\n${description}`);
  event.preventDefault();
}
