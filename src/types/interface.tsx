export interface Item {
  id: number;
  name: string;
  image: string;
  stats: {
    strength: number;
    power: number;
  };
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
