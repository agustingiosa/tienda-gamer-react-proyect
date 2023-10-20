import { createContext, useState, useEffect, useContext } from "react";

export const CartCtx = createContext();

const CartContext = ({ children }) => {
    const [listProducts, setListProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    const addToCart = (product) => {
        const updatedCart = [...cart];

        const existingProduct = updatedCart.find((item) => item.id === product.id);

        if (existingProduct) {
            existingProduct.cantidad += 1;
            existingProduct.precioTotal = existingProduct.precio * existingProduct.cantidad;
        } else {
            updatedCart.push({
                id: product.id,
                nombre: product.nombre,
                cantidad: 1,
                precio: product.precio,
                precioTotal: product.precio,
            });
        }
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    return (
        <CartCtx.Provider value={{ listProducts, setListProducts, cart, setCart, addToCart }}>
            {children}
        </CartCtx.Provider>
    );
};

export default CartContext;
