import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

interface Characteristics {
  age?: string;
  charisma?: number;
  class?: string;
  description?: string;
  dexterity?: number;
  endurance?: number;
  health?: number;
  intelligence?: number;
  level?: string;
  name?: string;
  notes?: string;
  personalityTraits?: string;
  race?: string;
  skillsNotes?: string;
  strength?: number;
  weakness?: string;
  wisdom?: number;
  weapons?: any[];
  spells?: any[];
  equipment?: any[];
  imageURL?: string;
}

export const getCharacteristicsFromFirebase = async (
  userId: string,
): Promise<Characteristics> => {
  try {
    const docRef = doc(db, 'characters', userId);

    const docSnap = await getDoc(docRef);

    return docSnap.exists()
      ? (docSnap.data() as Characteristics)
      : {
          age: '',
          charisma: 0,
          class: '',
          description: '',
          dexterity: 0,
          endurance: 0,
          health: 0,
          intelligence: 0,
          level: '',
          name: '',
          notes: '',
          personalityTraits: '',
          race: '',
          skillsNotes: '',
          strength: 0,
          weakness: '',
          wisdom: 0,
          weapons: [],
          spells: [],
          equipment: [],
          imageURL: '',
        };
  } catch (error) {
    console.error('Błąd przy pobieraniu cech postaci:', error);
    return {
      age: '',
      charisma: 0,
      class: '',
      description: '',
      dexterity: 0,
      endurance: 0,
      health: 0,
      intelligence: 0,
      level: '',
      name: '',
      notes: '',
      personalityTraits: '',
      race: '',
      skillsNotes: '',
      strength: 0,
      weakness: '',
      wisdom: 0,
      weapons: [],
      spells: [],
      equipment: [],
      imageURL: '',
    };
  }
};
