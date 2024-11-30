import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { CreateUserParams } from '../types/interface';

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
