import { db } from '../firebase';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';

export const addItemToFirebase = async (item, category) => {
  try {
    const userRef = doc(db, 'users', 'userId'); // Replace 'userId' with the actual user ID
    const categoryRef = doc(userRef, category); // Reference to the category document (weapons, spells, equipment)

    // Add the item to the correct category
    await updateDoc(categoryRef, {
      [category]: arrayUnion(item), // Add item to the category array
    });

    return item.id; // Return the item's ID
  } catch (error) {
    console.error('Error adding item to Firebase:', error);
    throw error;
  }
};
