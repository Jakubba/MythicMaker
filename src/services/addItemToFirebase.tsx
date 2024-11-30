// import { db } from '../firebase';
// import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
// import { getAuth } from 'firebase/auth';
// import { Item } from '../types/interface';

// export const addItemToFirebase = async (
//   item: Item,
//   category: string,
// ): Promise<string> => {
//   try {
//     console.log('Attempting to add item:', item);
//     console.log('Category:', category);
//     console.log('User ID:', userId);

//     if (!item.name) {
//       throw new Error('Item must have a name');
//     }

//     const auth = getAuth();
//     const currentUser = auth.currentUser;

//     const userId = currentUser.uid;
//     const userRef = doc(db, 'users', userId);

//     console.log('User authenticated. UserID:', userId);
//     console.log('Document reference for user:', userRef.path);

//     await updateDoc(userRef, {
//       [category]: arrayUnion(item),
//     });

//     console.log(
//       `Item added to category "${category}" for user ${userId}:`,
//       item,
//     );

//     return item.id;
//   } catch (error) {
//     console.error('Error adding item to Firebase:', error);
//     throw error;
//   }
// };
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const addItemToFirebase = async (item, category) => {
  try {
    const auth = getAuth();
    const currentUser = auth.currentUser;

    if (!currentUser) {
      throw new Error('User not authenticated');
    }

    const userId = currentUser.uid;

    if (!category) {
      throw new Error('Category not provided');
    }

    const categoryRef = collection(
      db,
      'users',
      userId,
      'categories',
      category,
      'products',
    );

    // Logowanie próby dodania przedmiotu
    console.log('Attempting to add item:', item);
    console.log('Category:', category);
    console.log('User ID:', userId);

    // Dodajemy przedmiot do Firebase
    await addDoc(categoryRef, item);

    // Logowanie po udanym dodaniu
    console.log(
      `Item added to category "${category}" for user ${userId}:`,
      item,
    );
  } catch (error) {
    console.error('Error adding item to Firebase:', error);
  }
};
