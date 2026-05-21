export interface CardProps {
  title: string;
  description: string;
  imageUrl: string;
  onDetailsClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  isDelailsVisible?: boolean;
}
