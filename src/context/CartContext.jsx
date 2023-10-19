import { createContext, useState, useEffect, useContext } from "react";

export const CartCtx = createContext();

const CartContext = ({ children }) => {
    const [listProducts, setListProducts] = useState([]);
    const [cart, setCart] = useState([]);

    // Modifica la función addToCart en tu contexto del carrito
    const addToCart = (product) => {
        // Clona el carrito actual para evitar mutar el estado directamente
        const updatedCart = [...cart];

        // Verifica si el producto ya está en el carrito
        const existingProduct = updatedCart.find((item) => item.id === product.id);

        if (existingProduct) {
            // Si el producto ya está en el carrito, aumenta su cantidad en 1
            existingProduct.cantidad += 1;
            existingProduct.precioTotal = existingProduct.precio * existingProduct.cantidad;
        } else {
            // Si no está en el carrito, agrégalo con cantidad 1 y precioTotal igual al precio unitario
            updatedCart.push({
                id: product.id,
                nombre: product.nombre,
                cantidad: 1,
                precio: product.precio,
                precioTotal: product.precio, // Precio total inicial es igual al precio unitario
            });
        }
        
        setCart(updatedCart);


    };


    return (
        <CartCtx.Provider value={{ listProducts, setListProducts, cart, setCart, addToCart }}>
            {children}
        </CartCtx.Provider>
    );
};

export default CartContext;
