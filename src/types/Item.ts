export interface IItem {
  id: string;
  name?: string;
  image?: string;
  stats?: IItemStats;
}

interface IItemStats {
  strength?: number;
  power?: number;
}

export interface IItemListProps {
  isOpen: boolean;
  onClose: () => void;
  items: IItem[];
  onAddItem: (item: IItem) => void;
}

export interface IItemsSectionProps {
  title: string;
  itemsData: IItem[];
  category: string;
}
