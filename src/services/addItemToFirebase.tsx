export const addItemToFirebase = async (item, category) => {
  try {
    const categoryRef = firebase
      .firestore()
      .collection('categories')
      .doc(category);
    await categoryRef.collection('products').add(item);
    console.log(`Przedmiot dodany do kategorii: ${category}`);
  } catch (error) {
    console.error('Błąd przy dodawaniu przedmiotu:', error);
  }
};
