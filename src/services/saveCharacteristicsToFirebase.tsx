import { db } from '../firebase';
import { doc, setDoc } from 'firebase/firestore';

interface Characteristics {
  age: string;
  charisma: number;
  class: string;
  description: string;
  dexterity: number;
  endurance: number;
  health: number;
  intelligence: number;
  level: string;
  name: string;
  notes: string;
  personalityTraits: string;
  race: string;
  skillsNotes: string;
  strength: number;
  weakness: string;
  wisdom: number;
  weapons?: any[];
  spells?: any[];
  equipment?: any[];
  imageURL?: string;
}

export const saveCharacteristicsToFirebase = async (
  userId: string,
  characteristics: Characteristics,
): Promise<void> => {
  try {
    if (!userId) {
      throw new Error('User ID is required');
    }

    console.log('Preparing to save data for user ID:', userId);
    console.log('Characteristics:', characteristics);

    const docRef = doc(db, 'users', userId);

    await setDoc(docRef, { characteristics }, { merge: true });

    console.log('Cechy postaci zapisane pomyślnie.');
  } catch (error) {
    console.error('Błąd przy zapisywaniu cech postaci:', error);
  }
};
