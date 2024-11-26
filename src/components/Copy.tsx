// interface Item {
//   id: string;
//   name: string;
//   image?: string;
//   stats?: {
//     strength: number;
//     power: number;
//   };
// }

// const getUserId = (): string | null => {
//   const auth = getAuth();
//   const user = auth.currentUser;
//   return user ? user.uid : null;
// };

// const FALLBACK_IMAGE = '/placeholder.jpg';
// const FALLBACK_ALT = 'Nieznany przedmiot';

// const ItemsSection: React.FC<ItemsSectionProps> = ({
//   title,
//   itemsData,
//   category,
// }) => {
//   const [items, setItems] = useState<Item[]>([]);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

//   const handleAddItem = async (item: Item) => {
//     try {
//       if (!item.name) {
//         throw new Error('Item name is required');
//       }

//       const itemId = uuidv4();
//       const newItem = { ...item, id: itemId };

//       console.log('Dodawanie przedmiotu:', newItem);
//       await addItemToFirebase(newItem, category);

//       setItems((prevItems) => [...prevItems, newItem]);
//       setIsModalOpen(false);
//     } catch (error) {
//       console.error('Błąd przy dodawaniu przedmiotu:', error);
//     }
//   };

//   useEffect(() => {
//     const loadItems = async () => {
//       try {
//         const userId = getUserId();
//         if (!userId) {
//           console.error('Brak userId, nie można pobrać danych.');
//           return;
//         }

//         const savedItems = await getItemsFromFirebase(category, userId);
//         setItems(Array.isArray(savedItems) ? savedItems : []);
//       } catch (error) {
//         console.error('Błąd przy ładowaniu przedmiotów:', error);
//       }
//     };

//     loadItems();
//   }, [category]);

//   const toggleModal = () => setIsModalOpen((prevState) => !prevState);

//   return (
//     <section className="mt-2">
//       <button
//         onClick={toggleModal}
//         className="p-2 mb-4 text-white bg-blue-500 rounded"
//       >
//         Dodaj przedmiot
//       </button>

//       <div>
//         <h3>{title}</h3>
//         <ul>
//           {items.map((item) => (
//             <li
//               key={item.id}
//               className="flex items-center p-2 space-x-4 rounded-md bg-slate-50"
//             >
//               <img
//                 src={item.image || FALLBACK_IMAGE}
//                 alt={item.name || FALLBACK_ALT}
//                 className="w-16 h-16"
//               />
//               <div>
//                 <p className="text-xl font-medium">{item.name}</p>
//                 <p className="text-base font-semibold">
//                   Siła: {item.stats?.strength || 0}
//                 </p>
//                 <p className="text-base">Moc: {item.stats?.power || 0}</p>
//               </div>
//               <button
//                 onClick={() => handleRemoveItem(item.id)}
//                 className="p-2 ml-auto text-white bg-red-500 rounded"
//               >
//                 Usuń produkt
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <ItemList
//         isOpen={isModalOpen}
//         onClose={toggleModal}
//         items={itemsData || []}
//         onAddItem={handleAddItem}
//       />
//     </section>
//   );
// };
