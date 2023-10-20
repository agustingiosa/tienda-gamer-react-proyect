import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import './SideNavbar.css';
import { db } from "../../dataBase/db";

const NavbarSide = ({ categoriaSeleccionada, setCategoriaSeleccionada, mostrarInicio }) => {
    const [categorias, setCategorias] = useState([]);

    const handleCategoriaSeleccionada = (categoria) => {
        setCategoriaSeleccionada(categoria);
        console.log("Categoría seleccionada:", categoria);
    };

    const fetchCategories = async () => {
        try {
            const productsRef = collection(db, "productos");
            const querySnapshot = await getDocs(productsRef);
            const uniqueCategorias = new Set();

            querySnapshot.forEach((doc) => {
                const producto = doc.data();
                uniqueCategorias.add(producto.categoria);
            });

            setCategorias([...uniqueCategorias]);
        } catch (error) {
            console.error("Error fetching categories:", error);
        }
    };

    useEffect(() => {
        fetchCategories();
    }, []);

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
