export const saveNotesToFirebase = async (notes) => {
  try {
    const docRef = firebase.firestore().collection('categories').doc('notes');
    await docRef.set({ content: notes });
    console.log('Notatki zapisane pomyślnie.');
  } catch (error) {
    console.error('Błąd przy zapisywaniu notatek:', error);
  }
};
