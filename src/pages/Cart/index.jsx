import React, { useContext } from 'react';
import { CartCtx } from '../../context/CartContext';

const Cart = () => {
    const { cart } = useContext(CartCtx);

    return (
        <div>
            <h1>Carrito de Compras</h1>
            {cart.length > 0 ? (
                <ul>
                    {cart.map((item) => (
                        <li key={item.id}>
                            <p>{item.nombre}</p>
                            <p>Cantidad: {item.cantidad}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>El carrito está vacío.</p>
            )}
        </div>
    );
};

export default Cart;

