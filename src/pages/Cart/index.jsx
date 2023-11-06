import React, { useContext, useEffect, useState } from 'react';
import { CartCtx } from '../../context/CartContext';
import NavbarBoots from '../../components/Navbar/Navbar';
import NavbarSide from '../../components/SideNavbar/SideNavbar';
import './cart.css';
import { db } from '../../dataBase/db'; 
import { collection, addDoc } from 'firebase/firestore'; 

const Cart = () => {
    const { cart, setCart } = useContext(CartCtx);
    const [orderInfo, setOrderInfo] = useState(null);

    const calculateCartTotal = () => {
        let total = 0;
        for (const item of cart) {
            total += item.precioTotal;
        }
        return total;
    };

    const handleFinalizarCompra = async () => {
        try {
            const orderRef = await addDoc(collection(db, 'ordenes'), {
                items: cart,
                total: calculateCartTotal(),
                fecha: new Date().toString(),
            });

            const orderId = orderRef.id;

            const orderData = {
                orderId,
                total: calculateCartTotal(),
                fecha: new Date().toString(),
            };

            setOrderInfo(orderData);

            setCart([]);
            localStorage.clear();
        } catch (error) {
            console.error('Error al agregar orden:', error);
        }
    };

    const handleBorrarCarrito = () => {
        setCart([]);
        localStorage.clear();
    };

    const handleEliminarItem = (itemId) => {
        const updatedCart = cart.filter((item) => item.id !== itemId);
        setCart(updatedCart);
    };

    return (
        <div>
            <NavbarBoots />
            <NavbarSide />
            <div className='cartelFinalizarCompra'>
                <h2>Total compra: ${calculateCartTotal().toFixed(2)}</h2>
                
                <button className='botonComprar' onClick={handleFinalizarCompra}>
                    Finalizar Compra
                </button>
                <button className='botonComprar' onClick={handleBorrarCarrito}>
                    Borrar Carrito
                </button>
            </div>
            <div className='body'>
                <h1>Carrito de Compras</h1>
                
                {cart.length > 0 ? (
                    <ul>
                        {cart.map((item) => (
                            <li key={item.id} className='productosCarrito'>
                                <p>{item.nombre}</p>
                                <p>Cantidad: {item.cantidad}</p>
                                <p>Precio: {item.precio}</p>
                                <p>Precio total: {item.precioTotal}</p>
                                <button className='botonComprar' onClick={() => handleEliminarItem(item.id)}>Eliminar</button>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>El carrito está vacío.</p>
                )}
            </div>
            <div className='body'>
                {orderInfo && (
                    <div>
                        <h2>Ordenes de compra</h2>
                        <p>ID de Orden: {orderInfo.orderId}</p>
                        <p>Fecha: {orderInfo.fecha}</p>
                        <p>Monto de la Orden: ${orderInfo.total.toFixed(2)}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
