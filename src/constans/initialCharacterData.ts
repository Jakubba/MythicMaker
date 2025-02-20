export interface CharacterData {
  name: string;
  race: string;
  age: string;
  class: string;
  level: number;
  description: string;
  health: number;
  strength: number;
  dexterity: number;
  endurance: number;
  intelligence: number;
  wisdom: number;
  charisma: number;
  imageURL: string;
  notes: string;
  skillsNotes: string;
  personalityTraits: string;
  weakness: string;
  weapons: string[];
  spells: string[];
  equipment: string[];
}

export const initialCharacterData: CharacterData = {
  name: '',
  race: '',
  age: '',
  class: '',
  level: 1,
  description: '',
  health: 10,
  strength: 0,
  dexterity: 0,
  endurance: 0,
  intelligence: 0,
  wisdom: 0,
  charisma: 0,
  imageURL: '',
  notes: '',
  skillsNotes: '',
  personalityTraits: '',
  weakness: '',
  weapons: [],
  spells: [],
  equipment: [],
};
