export const getItemsFromFirebase = async (category) => {
  try {
    const categoryRef = firebase
      .firestore()
      .collection('categories')
      .doc(category);
    const snapshot = await categoryRef.collection('products').get();
    const items = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return items;
  } catch (error) {
    console.error('Błąd przy pobieraniu przedmiotów:', error);
    return [];
  }
};
