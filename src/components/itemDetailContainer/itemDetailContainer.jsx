import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
    const [productSelect, setProductSelect] = useState({});
    const { id } = useParams();
    const [quantity, setQuantity] = useState(1);

    if (id !== undefined) {
        const idProductParam = id.toString();
        console.log(idProductParam);
    } else {
        // Manejar el caso en que id es undefined
        console.error("El ID es undefined");
    }

    // Supongamos que tienes una lista de productos llamada productsForFilter
    const productsForFilter = [
        {
            id: '1',
            name: "Ryzen 5 5500g ",
            price: "170.000",
            description: "Precio de lista: $200.000",
            image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS_t-49FtrIWRFIhQ0-3m6QN26UYHizNcOortnr6OMgmC6Jfpke4W9mZIowFke0rbLk_N72GdLQbeHMGE8OSeKPPSCc1giqBEp7bJCHuM4dlFrD3RKsErlX1rQfCpF1&usqp=CAc'
        },
        {
            id: '2',
            name: "Mother MSI A520M-A PRO DDR4 AM4 ",
            price: "77.000",
            description: "Precio de lista: $100.000",
            image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21848_Mother_MSI_A520M-A_PRO_DDR4_AM4_29d05f8c-grn.jpg'
        },
        {
            id: '3',
            name: "Gabinete Corsair Crystal 465X RGB iCue Smart Black Mid Tower ",
            price: "90.000",
            description: "Precio de lista: $130.000",
            image: 'https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18529_Gabinete_Corsair_Crystal_465X_RGB_iCue_Smart_Black_Mid_Tower_b2ac7974-grn.jpg'
        },
    ];

    const addToCart = () => {
        const updatedCart = [...cart, productSelect];

        setCart(updatedCart);

        alert(`Se ha agregado "${productSelect.name}" al carrito.`);
    };

    useEffect(() => {
        const idProductParam = id.toString();
        const result = productsForFilter.find((prod) => prod.id === idProductParam);

        if (result) {
            setProductSelect(result);
        } else {
            console.error(`No se encontró ningún producto con el ID ${idProductParam}`);
        }
    }, [id, productsForFilter]);

    const incrementQuantity = () => {
        setQuantity(quantity + 1);
    };

    const decrementQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="box-item-detail">
            {productSelect && (
                <>
                    <h1 className="item-title">{productSelect.name}</h1>
                    <div className="item-detail-container">
                        <div>
                            <img src={productSelect.image} alt={productSelect.name} />
                        </div>
                        <div className='item-detail-container-add'>
                            <p className="item-price">{productSelect.price}</p>
                            <p className="item-description">{productSelect.description}</p>
                            <div className="quantity-controls">
                                <button className='quantity' onClick={decrementQuantity}>-</button>
                                <span>{quantity}</span>
                                <button className='quantity' onClick={incrementQuantity}>+</button>
                            </div>
                            <button className='boton' onClick={addToCart}>
                                Agregar al carrito
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default ItemDetailContainer;
