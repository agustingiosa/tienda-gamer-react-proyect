import React, { useContext } from 'react';
import { CartCtx } from '../../context/CartContext';
import Layout from '../../components/Layout/Layout';
import './cart.css'

const Cart = () => {
    const { cart: cartProducts, clearCart } = useContext(CartCtx);

    // Create a dictionary to store counts of products with the same ID
    const productCounts = {};

    // Count the occurrences of each product in the cart
    cartProducts.forEach((product) => {
        if (!productCounts[product.id]) {
            productCounts[product.id] = 0;
        }
        productCounts[product.id]++;
    });
    console.log(cartProducts)

    return (
        <Layout>
            <div>
                <button onClick={clearCart}>Clear Cart</button>
            </div>
            {cartProducts.length ? (
                <div>
                    {cartProducts.map((product) => (
                        <div key={product.id}>
                            <h3 className='nombrecarrito'>{product.nombre}</h3>
                        </div>
                    ))}
                </div>
            ) : (
                <h1>No tienes productos en tu carrito</h1>
            )}
        </Layout>
    );
};

export default Cart;
