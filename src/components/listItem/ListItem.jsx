import React from 'react';
import { Link } from 'react-router-dom';
import './ListItem.css';

const ListItem = (props) => {
    const handleAddToCart = () => {
        props.addToCart({ name: props.name, price: props.price });
    };

    return (
        <div className="items">
            <img src={props.url} alt={props.name} />
            <h2 className='tituloProducto'>{props.name}</h2>
            <p className='precioProducto'> ${props.price}</p>
            <Link to={`/Productos/${props.id}`} className='botonLink'>
                Ver detalles
            </Link>
            <button onClick={handleAddToCart} className='boton'>Agregar al carrito</button>
        </div>
    );
};

export default ListItem;