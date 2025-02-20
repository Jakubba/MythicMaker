export interface ItemListProps {
  isOpen: boolean;
  onClose: () => void;
  items: Item[];
  onAddItem: (item: Item) => void;
}
