import React from "react";
import NavbarSide from "../../components/SideNavbar/SideNavbar"; // Ajusta la ruta según tu estructura de carpetas
import { productos } from "../../products"; // Importa los datos de productos

const Productos = () => {
    return (
        <div className="main-page">
            <NavbarSide />
            <div className="main-content">
                {productos.map((producto) => (
                    <div key={producto.id} className="producto">
                        <h4>{producto.nombre}</h4>
                        {/* Agrega más detalles del producto según tus necesidades */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Productos;
