// Home.jsx
import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import Item from "../../components/Item/Item";
import ItemList from "../../components/ItemList/ItemList";
import { productos } from "../../products";
import { CartCtx } from "../../context/CartContext";
import { Ring } from "@uiball/loaders";
import NavbarSide from "../../components/SideNavbar/SideNavbar";
import './index.css';

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { listProducts, setListProducts } = useContext(CartCtx);
  const [es, setEs] = useState(true);
  const [message, setMessage] = useState(0);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(""); // Nuevo estado para la categoría seleccionada

  useEffect(() => {
    setTimeout(() => {
      // Filtrar productos según la categoría seleccionada, o mostrar todos si no hay selección
      const productosFiltrados = categoriaSeleccionada
        ? productos.filter((prod) => prod.categoria === categoriaSeleccionada)
        : productos;

      setListProducts(productosFiltrados);
      setIsLoading(false);
    }, 300);
  }, [categoriaSeleccionada]); // Escuchar cambios en la categoría seleccionada

  return (
    <Layout>
      <h2 className="tituloCategoria">{categoriaSeleccionada}</h2>
      <div className="main-content">
        <NavbarSide
          categoriaSeleccionada={categoriaSeleccionada}
          setCategoriaSeleccionada={setCategoriaSeleccionada}
        />
        {isLoading && <Ring />}
        {!isLoading && (
          <div className="product-grid">
            {listProducts.map((prod) => (
              <Item key={prod.id} id={prod.id} imagen={prod.imagen} nombre={prod.nombre} precio={`$${prod.precio}` } />
            ))}
          </div>
        )}
      </div>
    </Layout>

  );
};

export default Home;

