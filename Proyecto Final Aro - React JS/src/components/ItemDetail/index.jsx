import { useContext, useState, useEffect } from "react";
import { CartContext } from "../../context/cartContext";
import Button from "../Button";

const ItemDetail = ({ title, img, price, description, category, color }) => {
    const { addItem } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const [showMessage, setShowMessage] = useState(false);

    const handleAdd = () => {
        if (quantity > 0) {
            addItem({ title, img, price, description, category, color, quantity });
            setShowMessage(true);
        } else {
            alert("La cantidad debe ser mayor que 0");
        }
    };

    useEffect(() => {
        if (showMessage) {
            const timer = setTimeout(() => {
                setShowMessage(false);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [showMessage]);

    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const decreaseQuantity = () => {
        setQuantity(prevQuantity => (prevQuantity > 1 ? prevQuantity - 1 : prevQuantity));
    };

    return (
        <section className="item-detail">
            <picture className="item-detail-picture">
                <img className="item-detail-picture-img" src={`/img/item/${img}`} alt={`${title} - Foto`} />
            </picture>

            <article className="item-detail-info">
                <p className="item-detail-info-category">{category}</p>
                <h2 className="item-detail-info-name">{title}</h2>
                <p className="item-detail-info-description">{description}</p>
                <p className="item-detail-info-color">Disponible en color: {color}</p>
                <p className="item-detail-info-price">${price}.-</p>
                <div className="quantity-controls">
                    <Button 
                        eventHandler={decreaseQuantity}
                        label="-"
                        className="item-detail-button"
                        type="button"
                    />
                    <input
                        className="item-detail-form-input"
                        type="text"
                        value={quantity}
                        readOnly
                        aria-label="Cantidad seleccionada"
                    />
                    <Button 
                        eventHandler={increaseQuantity}
                        label="+"
                        className="item-detail-button"
                        type="button"
                    />
                </div>

                <Button 
                    eventHandler={handleAdd}
                    label="Agregar al Carrito"
                    className="item-detail-form-submit"
                    type="button"
                />

                {showMessage && (
                    <div className="mensagge">
                        Producto agregado correctamente
                    </div>
                )}
            </article>
        </section>
    );
};

export default ItemDetail;



