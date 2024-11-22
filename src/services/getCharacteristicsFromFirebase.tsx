export const getCharacteristicsFromFirebase = async () => {
  try {
    const docRef = firebase
      .firestore()
      .collection('categories')
      .doc('characteristics');
    const doc = await docRef.get();
    return doc.exists ? doc.data() : { field1: '', field2: '', field3: '' };
  } catch (error) {
    console.error('Błąd przy pobieraniu cech postaci:', error);
    return { field1: '', field2: '', field3: '' };
  }
};
