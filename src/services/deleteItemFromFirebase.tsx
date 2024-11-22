export const deleteItemFromFirebase = async (category, itemId) => {
  try {
    const categoryRef = firebase
      .firestore()
      .collection('categories')
      .doc(category);
    await categoryRef.collection('products').doc(itemId).delete();
    console.log(`Przedmiot usunięty z kategorii: ${category}`);
  } catch (error) {
    console.error('Błąd przy usuwaniu przedmiotu:', error);
  }
};
