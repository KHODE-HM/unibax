export interface ICardProps {
  id: number;
  title: string;
  subtitle: string;
  isSelected: boolean;
  onClick: () => void;
}
