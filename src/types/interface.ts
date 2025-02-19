export interface Item {
  id: string;
  name?: string;
  image?: string;
  stats?: ItemStats;
}
interface ItemStats {
  strength?: number;
  power?: number;
}

export interface ItemListProps {
  isOpen: boolean;
  onClose: () => void;
  items: Item[];
  onAddItem: (item: Item) => void;
}

export interface ItemsSectionProps {
  title: string;
  itemsData: Item[];
  category: string;
}

export interface Characteristics {
  name?: string;
  race?: string;
  age?: number;
  class?: string;
  level?: number;
  description?: string;
  health?: number;
  strength?: number;
  dexterity?: number;
  endurance?: number;
  intelligence?: number;
  wisdom?: number;
  charisma?: number;
  weakness?: string;
  imageURL?: string;
  notes?: string;
  skillsNotes?: string;
  personalityTraits?: string;
}

export interface CreateUserParams {
  email: string;
  password: string;
  profile: Characteristics;
}
