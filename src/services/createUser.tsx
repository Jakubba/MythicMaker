import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { setDoc, doc } from 'firebase/firestore';

interface CreateUserParams {
  email: string;
  password: string;
}

export const createUser = async ({ email, password }: CreateUserParams) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password,
    );
    const user = userCredential.user;

    await setDoc(doc(db, 'users', user.uid), {
      email: email,
      createdAt: new Date(),
    });

    console.log('Registered:', user);
    return user;
  } catch (error) {
    throw error;
  }
};
