import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import Spinner from "../../components/Spinner";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../../services/firebase/firebaseConfig";

const Store = () => {
  const { id } = useParams();

  let [items, setItems] = useState([]);
  let [loading, setLoading] = useState(false);
  let [fallback, setFallback] = useState(false);

  useEffect(() => {
    setLoading(true);
    const productsCollection = collection(database, "productos");

    getDocs(productsCollection)
      .then((response) => {
        const data = response.docs.map(doc => ({ id: doc.id, ...doc.data() }));

        if (id) {
          setItems(data.filter(item => item.category === id));
        } else {
          setItems(data);
        }
      })
      .catch((error) => {
        console.error("Error fetching products from Firebase: ", error);
        setFallback(true);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <main className="store">
      {loading ? (
        <Spinner />
      ) : fallback ? (
        <p>No pudimos cargar los datos</p>
      ) : (
        <ItemList className="store__items" items={items} />
      )}
    </main>
  );
};

export default Store;
