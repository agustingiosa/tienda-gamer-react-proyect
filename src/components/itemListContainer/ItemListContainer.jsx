import React, { useState, useEffect } from 'react';
import ListItem from '../listItem/ListItem';
import './ItemListContainer.css';

const ItemListContainer = (props) => {
    const [categorias, setCategorias] = useState([]);
    const [productos, setProductos] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');

    useEffect(() => {
        const productos = [
            {
                id: '1',
                name: 'Ryzen 5 5500g',
                price: '170.000',
                url: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_27675_Procesador_AMD_Ryzen_5_5600G_4.4GHz_Turbo___Wraith_Stealth_Cooler_d4e323ea-med.jpg',
                categoria: 'Procesadores',
            },
            {
                id: '2',
                name: 'Mother MSI A520M-A PRO DDR4 AM4',
                price: '77.000',
                url: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_21848_Mother_MSI_A520M-A_PRO_DDR4_AM4_29d05f8c-med.jpg',
                categoria: 'Motherboards',
            },
            {
                id: '3',
                name: 'Gabinete Corsair Crystal 465X RGB iCue Smart Black Mid Tower',
                price: '90.000',
                url: 'https://imagenes.compragamer.com/productos/compragamer_Imganen_general_18529_Gabinete_Corsair_Crystal_465X_RGB_iCue_Smart_Black_Mid_Tower_b2ac7974-med.jpg',
                categoria: 'Gabinetes',
            },
        ];

        const categoriasUnicas = new Set(productos.map((producto) => producto.categoria));

        const categoriasArray = ['todos', ...categoriasUnicas];

        setProductos(productos);
        setCategorias(categoriasArray);
    }, []);

    const productosFiltrados = categoriaSeleccionada === 'todos'
        ? productos
        : productos.filter((producto) => producto.categoria === categoriaSeleccionada);

    return (
        <>  
            <div className="categorias">
                <h3>Categorías</h3>
                <ul>
                    {categorias.map((categoria) => (
                        <li
                            key={categoria}
                            onClick={() => setCategoriaSeleccionada(categoria)}
                            className={categoria === categoriaSeleccionada ? 'seleccionada' : ''}
                        >
                            {categoria}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="productos container">
                {productosFiltrados.map((producto) => (
                    <ListItem
                        id={producto.id}
                        name={producto.name}
                        price={producto.price}
                        url={producto.url}
                        addToCart={props.addToCart}
                        categoria={producto.categoria}
                    />
                ))}
            </div>
        </>
    );
};

export default ItemListContainer;
