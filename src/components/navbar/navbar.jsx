import React from 'react';
import './navbar.css'
import CartWidget from '../cartWidget/CartWidget'; 

function Navbar({ cartItemCount }) {
return (
    <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container">
            <a className="navbar-brand" href="/">Tienda gamer</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Productos">Productos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/Checkout">Checkout</a>
                    </li>
                </ul>
            </div>
            <CartWidget itemCount={cartItemCount} />
        </div>
    </nav>
    );
}

export default Navbar;