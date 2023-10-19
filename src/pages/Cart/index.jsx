import React, { useContext } from 'react';
import { CartCtx } from '../../context/CartContext';
import NavbarBoots from '../../components/Navbar/Navbar';
import NavbarSide from '../../components/SideNavbar/SideNavbar';
import './cart.css'

const Cart = () => {
    const { cart } = useContext(CartCtx);

    const calculateCartTotal = () => {
        let total = 0;
        for (const item of cart) {
            total += item.precioTotal;
        }
        return total;
    };

    return (
        <div>
            <NavbarBoots />
            <NavbarSide />
            <div className='cartelFinalizarCompra'>
                <h2>Total compra: ${calculateCartTotal().toFixed(2)}</h2>
                <h2> </h2>
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
                                {console.log(item)}
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>El carrito está vacío.</p>
                )}
            </div>
        </div>
    );
};

export default Cart;

