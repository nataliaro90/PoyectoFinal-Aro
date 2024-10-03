import { Icon } from "@iconify/react";
import Pill from "../Pill";
import React, { useContext } from 'react';
import { CartContext } from "../../context/cartContext";

const CartWidget = () => {
    const { cartItems } = useContext(CartContext);

    const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className="cart-widget">
            {totalQuantity > 0 && <Pill quantity={totalQuantity} />}
            <Icon className="cart-widget-cart" icon="lucide:cooking-pot" />
        </div>
    );
};

export default CartWidget;
