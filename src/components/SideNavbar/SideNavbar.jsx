// NavbarSide.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { productos } from "../../products"; // Importa los datos de productos
import './SideNavbar.css'

const NavbarSide = ({ categoriaSeleccionada, setCategoriaSeleccionada, mostrarInicio }) => {
    const [categorias, setCategorias] = useState([]);

    const handleCategoriaSeleccionada = (categoria) => {
        setCategoriaSeleccionada(categoria);
        console.log("Categoría seleccionada:", categoria);
    };

    useEffect(() => {
        // Extraer categorías únicas de los productos y almacenarlas en el estado
        const uniqueCategorias = [...new Set(productos.map((producto) => producto.categoria))];
        setCategorias(uniqueCategorias);
    }, []); // Ejecutar esto solo una vez al cargar el componente

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <h3>GamingHouse</h3>
            </div>
            <ul className="sidebar-nav">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <ul>
                        <li>
                            <Link to="" onClick={() => handleCategoriaSeleccionada("")}>
                                Todos los productos
                            </Link>
                        </li>
                        {categorias.map((categoria) => (
                            <li key={categoria}>
                                <Link to="" onClick={() => handleCategoriaSeleccionada(categoria)}>
                                    {categoria}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default NavbarSide;
