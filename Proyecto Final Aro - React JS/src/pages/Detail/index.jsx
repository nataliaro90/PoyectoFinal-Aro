import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { database } from "../../services/firebase/firebaseConfig";

const Detail = () => {
    const { id } = useParams();
    let [item, setItem] = useState(null);
    let [loading, setLoading] = useState(true);
    let [fallback, setFallback] = useState(false);

    useEffect(() => {
        const itemDoc = doc(database, "productos", id); // Obtener el documento específico

        getDoc(itemDoc)
            .then((response) => {
                if (response.exists()) {
                    setItem({ id: response.id, ...response.data() }); // Guardar el producto en el estado
                } else {
                    setFallback(true); // Si no existe el documento
                }
            })
            .catch((error) => {
                console.error("Error fetching item from Firebase: ", error);
                setFallback(true);
            })
            .finally(() => setLoading(false)); // Cambia el estado de loading al final
    }, [id]);

    if (loading) return <p>Cargando...</p>; // Mostrar un mensaje de carga
    if (fallback) return <p>No pudimos cargar los datos</p>; // Mensaje de error si no se encuentra el producto

    return item ? <ItemDetail {...item} /> : null; // Renderizar el componente ItemDetail si existe el item
}

export default Detail;