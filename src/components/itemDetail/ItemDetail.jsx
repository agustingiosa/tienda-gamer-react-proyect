import React from 'react';
import './ItemDetail.css';

const ItemDetail = ({ name, price, description, imageUrl }) => {
    return (
        <div className="item-detail">
            <img src={imageUrl} alt={name} />
            <h2 className='tituloProducto'>{name}</h2>
            <p className='precioProducto'>${price}</p>
            <p className='descripcionProducto'>{description}</p>
        </div>
    );
};

export default ItemDetail;