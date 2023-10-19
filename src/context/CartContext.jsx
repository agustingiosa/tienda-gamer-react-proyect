import { createContext, useState, useEffect, useContext } from "react";

export const CartCtx = createContext();

const CartContext = ({ children }) => {
    const [listProducts, setListProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // Mueve la lógica de addToCart aquí para que tenga acceso a cart y setCart
    const addToCart = (product) => {
        const existingProduct = cart.find((item) => item.id === product.id);

        if (existingProduct) {
            // El producto ya está en el carrito, solo actualiza la cantidad
            const updatedCart = cart.map((item) => {
                if (item.id === product.id) {
                    return { ...item, cantidad: item.cantidad + 1 };
                }
                return item;
            });

            setCart(updatedCart);
        } else {
            // El producto no está en el carrito, agrégalo con una cantidad inicial de 1
            setCart([...cart, { ...product, cantidad: 1 }]);
        }
    };

    return (
        <CartCtx.Provider value={{ listProducts, setListProducts, cart, setCart, addToCart }}>
            {children}
        </CartCtx.Provider>
    );
};

export default CartContext;
