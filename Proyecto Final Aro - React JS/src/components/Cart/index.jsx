import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import Button from '../Button';
import PaymentSimulator from '../PaymentSimulator';

const Cart = () => {
    const { cartItems, removeItem, updateItemQuantity, clearCart } = useContext(CartContext);
    const [paymentSuccessful, setPaymentSuccessful] = useState(false); 
    const [showPaymentSimulator, setShowPaymentSimulator] = useState(false); 

    const handleQuantityChange = (id, increment) => {
        const item = cartItems.find(item => item.id === id);
        if (item) {
            const newQuantity = increment ? item.quantity + 1 : item.quantity - 1;
            if (newQuantity > 0) {
                updateItemQuantity(id, newQuantity);
            }
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const handlePaymentSuccess = () => {
        setPaymentSuccessful(true); 
        setShowPaymentSimulator(false); 
    };

    const handleCheckoutClick = () => {
        setShowPaymentSimulator(true); 
    };

    return (
        <div className="cart">
            {paymentSuccessful ? (
                <h2>¡Gracias por tu compra!</h2>
            ) : (
                <>
                    <h2>Tu Carrito</h2>
                    {cartItems.length === 0 ? (
                        <p>El carrito está vacío.</p>
                    ) : (
                        <>
                            <ul>
                                {cartItems.map(item => (
                                    <li key={item.id} className="cart-item">
                                        <img src={`/img/item/${item.img}`} alt={item.title} className="cart-item-img" />
                                        <div className="cart-item-details">
                                            <p>{item.title}</p>
                                            <p>Precio: ${item.price}</p>
                                            <div className="quantity-controls">
                                                <Button eventHandler={() => handleQuantityChange(item.id, false)} label="-" />
                                                <span className='quantity-number'>{item.quantity}</span>
                                                <Button eventHandler={() => handleQuantityChange(item.id, true)} label="+" />
                                            </div>
                                        </div>
                                        <Button className="button" eventHandler={() => removeItem(item.id)} label="Eliminar" />
                                    </li>
                                ))}
                            </ul>
                            <h3>Total: ${calculateTotal()}</h3>
                            <Button className="button" eventHandler={handleCheckoutClick} label="Finalizar compra" />
                            <Button className="button" eventHandler={clearCart} label="Limpiar Carrito" />
                        </>
                    )}
                </>
            )}
            {showPaymentSimulator && (
                <PaymentSimulator onPaymentSuccess={handlePaymentSuccess} />
            )}
        </div>
    );
};

export default Cart;
