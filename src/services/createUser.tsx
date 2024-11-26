import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore';

interface UserProfile {
  name: string;
  race: string;
  age: number;
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
  weapons: object[]; 
  spells: object[]; 
  equipment: object[]; 
}

interface CreateUserParams {
  email: string;
  password: string;
  profile: UserProfile;
}

export const createUser = async ({
  email,
  password,
  profile,
}: CreateUserParams) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    const userData = {
      email,
      createdAt: new Date(),
      ...profile,
      weapons: [],
      spells: [],
      equipment: [],
    };

    await setDoc(doc(db, 'users', user.uid), userData);

    console.log('Registered and profile created:', user);
    return user;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};
