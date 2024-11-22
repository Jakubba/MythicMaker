export const saveCharacteristicsToFirebase = async (characteristics) => {
  try {
    const docRef = firebase
      .firestore()
      .collection('categories')
      .doc('characteristics');
    await docRef.set(characteristics);
    console.log('Cechy postaci zapisane pomyślnie.');
  } catch (error) {
    console.error('Błąd przy zapisywaniu cech postaci:', error);
  }
};
