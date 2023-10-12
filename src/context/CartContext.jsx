import { createContext, useState, useEffect } from "react";

export const CartCtx = createContext();

const CartContext = ({ children }) => {
    const [listProducts, setListProducts] = useState([]);
    const [cart, setCart] = useState([]);

    const addToCart = (idProduct) => {
        // Add item to the cart
        setCart([...cart, { id: idProduct }]);
    };

    // Load cart data from localStorage when the component mounts
    useEffect(() => {
        const storedCart = localStorage.getItem("cart");
        if (storedCart) {
            setCart(JSON.parse(storedCart));
        }
    }, []);

    // Save cart data to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    console.log(cart)
    return (
        <CartCtx.Provider value={{ listProducts, setListProducts, cart, setCart, addToCart }}>
            {children}
        </CartCtx.Provider>
        
    );
};

export default CartContext;
