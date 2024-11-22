export const getNotesFromFirebase = async () => {
  try {
    const docRef = firebase.firestore().collection('categories').doc('notes');
    const doc = await docRef.get();
    return doc.exists ? doc.data().content : '';
  } catch (error) {
    console.error('Błąd przy pobieraniu notatek:', error);
    return '';
  }
};
