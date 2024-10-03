import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [purchaseComplete, setPurchaseComplete] = useState(false);

    const addItem = (item) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find(currentItem => currentItem.title === item.title);
            if (existingItem) {
                return prevItems.map(currentItem => 
                    currentItem.title === item.title 
                        ? { ...currentItem, quantity: currentItem.quantity + item.quantity }
                        : currentItem
                );
            } else {
                return [...prevItems, { ...item, quantity: 1 }];
            }
        });
    };

    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter(currentItem => currentItem.id !== id));
    };

    const updateItemQuantity = (id, quantity) => {
        if (quantity < 1) return;
        setCartItems(
            cartItems.map(currentItem => 
                currentItem.id === id
                    ? { ...currentItem, quantity } 
                    : currentItem
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const checkout = () => {
        clearCart();
        setPurchaseComplete(true);
    };

    return (
        <CartContext.Provider
            value={{ cartItems, addItem, removeItem, updateItemQuantity, clearCart, checkout, purchaseComplete }}
        >
            {children}
        </CartContext.Provider>
    );
};
