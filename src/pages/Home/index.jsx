
import React, { useContext, useEffect, useState } from "react";
import { db } from "../../dataBase/db";
import { collection, getDocs, query, where } from "firebase/firestore";
import Layout from "../../components/Layout/Layout";
import Item from "../../components/Item/Item";
import { CartCtx } from "../../context/CartContext";
import { Ring } from "@uiball/loaders";
import NavbarSide from "../../components/SideNavbar/SideNavbar";
import "./index.css";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { listProducts, setListProducts } = useContext(CartCtx);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productsRef = collection(db, "productos");
        const q = categoriaSeleccionada
          ? query(productsRef, where("categoria", "==", categoriaSeleccionada))
          : productsRef;

        const querySnapshot = await getDocs(q);

        const products = querySnapshot.docs.map((doc) => ({
          id: doc.id, 
          ...doc.data(),
        }));

        setListProducts(products);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [categoriaSeleccionada]);

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
              <Item
                key={prod.id}
                id={prod.id}
                imagen={prod.imagen}
                nombre={prod.nombre}
                precio={`$${prod.precio}`}
              />
            ))}
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Home;
