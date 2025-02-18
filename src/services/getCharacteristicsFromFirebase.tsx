import { db } from './../firebase/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { Characteristics } from '../types/interface';

export const getCharacteristicsFromFirebase = async (
  userId: string,
): Promise<Characteristics> => {
  const defaultCharacteristics: Characteristics = {
    age: 0,
    charisma: 0,
    class: '',
    description: '',
    dexterity: 0,
    endurance: 0,
    health: 0,
    intelligence: 0,
    level: 0,
    name: '',
    notes: '',
    personalityTraits: '',
    race: '',
    skillsNotes: '',
    strength: 0,
    weakness: '',
    wisdom: 0,
    // weapons: [],
    // spells: [],
    // equipment: [],
    imageURL: '',
  };

  try {
    const docRef = doc(db, 'users', userId);

    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const data = docSnap.data();
      return { ...defaultCharacteristics, ...data } as Characteristics;
    } else {
      console.warn(`Document for userId: ${userId} does not exist.`);
      return defaultCharacteristics;
    }
  } catch (error) {
    console.error('Error fetching user characteristics:', error);
    return defaultCharacteristics;
  }
};
